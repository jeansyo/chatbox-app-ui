import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { socket } from '../../socket/socket';

export const FormChat = () => {

    
    const initialValues = {
        msg: ''
    }

    const validateFields = ( {msg} ) => {
        let errors = {};
        if( msg.length === 0 ) {
            errors.msg = 'Please enter a message'
        } else if( !msg ){
            errors.msg = "Please enter a message"
        }

        return errors
    }

    const handleOnSubmit = ( { msg }, { resetForm } ) => {
        resetForm();
        socket.emit( "send-message", { message: msg} )
    }


    return (
        <Formik
            initialValues={ initialValues }
            validate={ validateFields }
            onSubmit={ handleOnSubmit }
        >

            { ({ errors }) => (
                <Form className="d-flex flex-nowrap w-100 align-items-center justify-content-evenly">
                    <div className="me-3 input-group-prepend d-flex justify-content-center align-items-center h-100" style={{ height: '38px' ,maxWidth: '30px' }}>
                        <button type="submit" className="button-style input-group-text h-100"><i className="fas fa-paper-plane"></i></button>
                    </div>
                    <div className="">
                        <Field
                            id="msg"
                            type="text"
                            name="msg"
                            placeholder="Enter text here..."
                            className="form-control m-0 input-style"
                            autoComplete="off"
                        />
                        <ErrorMessage
                            name="msg"
                            component={ () => ( 
                                    <div 
                                        className="text-danger text-small fw-lighter"
                                        style={{
                                            position: 'absolute',
                                            fontSize: '.8rem'
                                        }}
                                    >
                                        { errors.msg }
                                    </div> 
                                ) }
                        />                                    
                    </div>
                </Form>
            ) }
            
        </Formik>
    )
}
