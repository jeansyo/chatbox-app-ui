import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import validator from 'validator'
import { useDispatch } from 'react-redux';
import { __authLogin } from '../../actions/authActions';

export const AuthForm = () => {

    const dispatch = useDispatch();

    const initialValues=  {
        email: '',
        password: ''
    }

    const handleOnSubmit = ( values, { resetForm } ) => {
        resetForm();
        alert("Formulario enviado")
        dispatch( __authLogin( values ) )
    }

    const validateForm = (values) => {
        let errors = {}
        if(values.email.length === 6){
            errors.email = "Please complete this field"
        }else if ( !validator.isEmail( values.email ) ){
            errors.email = "It is not a valid address"
        }

        if( values.password.length === 0 ){
            errors.password = "Please complete this field"
        }else if( values.password.length < 6 ){
            errors.password = "Invalid password"
        }

        return errors
    }

    return (
        <Formik
            onSubmit={handleOnSubmit}
            validate={validateForm}
            initialValues={ initialValues }
        >
         {
             ({errors}) => (
                 <Form>
                        <div className="row px-1">
                            <label className="mb-1">
                                <h6 className="mb-0 text-md text-white">Email Address</h6>
                            </label> 
                            <Field style={{ width: '90%' }} autoComplete="on" className="mb-2 input-web" type="text" name="email" placeholder="Enter a valid email address"/>
                            <ErrorMessage name="email" component={() => (<div className=" mb-1 text-danger fw-bold">{errors.email}</div>)}/>
                        </div>
                        <div className="row px-1">  
                            <label className="mb-1">
                                <h6 className="mb-0 text-md text-white">Password</h6>
                            </label> 
                            <Field style={{ width: '90%' }} autoComplete="off" className="input-web" type="password" name="password" placeholder="Enter password"/>
                            <ErrorMessage name="password" component={() => (<div className=" mt-0 text-danger fw-bold">{errors.password}</div>)}/>
                        </div>
                        <div className="row mt-3 mb-3 px-1"> 
                            <button type="submit" className="btn-web btn-web3 text-center">Login</button>
                        </div>
                 </Form>
             )
         }   
        </Formik>
    )
}
