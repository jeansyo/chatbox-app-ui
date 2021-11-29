import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import  validator from "validator";
import { useDispatch } from 'react-redux';
import { __authRegister } from '../../actions/authActions';

export const AuthRegister = () => {

    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    const handleOnSubmit = (values, { resetForm }) => {
        resetForm();
        alert("Formulario de registro enviado");
        dispatch( __authRegister( values ) );
        document.getElementById("close-modal").click()
    }

    const validateFields = ({ name, password, email }) => {
        
        let errors = {}

        if( name.length === 0 ){
            errors.name = "Please fill in this field."
        }else if( name.length < 3 ){
            errors.name = "Invalid name"
        }

        if( email.length === 0 ) {
            errors.email = "Please fill in this field."
        }else if( !validator.isEmail( email ) ){
            errors.email = "Invalid email"
        }

        if( password.length === 0 ) {
            errors.password = "Please fill in this field."
        }else if( password.length < 6 ){
            errors.password = "Invalid password"
        }

        return errors
    }

    return (
        <div className="modal fade" id="contact" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document" style={{ maxWidth: '400px', margin: 'auto' }}>
                <div className="modal-content bg-modal">
                    <div className="modal-header">
                        <h5 className="modal-title text-light" id="exampleModalLabel">Register now!!!</h5>
                        <span type="button" id="close-modal" className="close text-light fs-3 m-0" data-bs-dismiss="modal" aria-label="Close">
                            &times;
                        </span>
                    </div>
                    <div className="modal-body">
                        <Formik
                            onSubmit={ handleOnSubmit }
                            validate={ validateFields }
                            initialValues={ initialValues }
                        >
                            {({errors}) => (
                                <Form className="form my-2 mb-0 mr-2 ml-2">
                                    <div className="form-row">
                                        <div className="form-group col-sm"> 
                                            <label className="text-white">Name</label>
                                            <Field autoComplete="on" type="text" name="name" id="name" className="form-control bg-transparent text-white"/>
                                            <ErrorMessage name="name" component={ () => (<div className="text-danger">{ errors.name }</div>) } />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label  className="text-white">Email</label>
                                        <Field autoComplete="on" id="email" type="email" name="email" className="form-control bg-transparent  text-white"/>
                                        <ErrorMessage name="email" component={ () => (<div className="text-danger">{ errors.email }</div>) }/>
                                    </div>
                                    <div className="form-group">
                                        <label className="text-white">Password</label>
                                        <Field autoComplete="off" id="password" type="password" name="password" className="form-control bg-transparent  text-white"/>
                                        <ErrorMessage name="password" component={ () => (<div className="text-danger">{ errors.password }</div>) }/>
                                    </div>
                                    <div className="modal-footer mt-4">
                                        <button className="btn btn-outline-light ml-sm-2" style={{borderRadius: "50px", width:"100%"}} data-dismiss="modal">
                                            Register
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>

    )
}
