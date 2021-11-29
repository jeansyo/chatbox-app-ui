import React from 'react';
import './auth.css';
import { AuthForm } from './AuthForm';
import { AuthRegister } from './AuthRegister';

export const AuthScreen = () => {

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center h-md">
            <div className="filter-image"></div>
            <div className="card bg-glassmorphism card0 border-0 my-4 my-lg-0">
                <div className="row d-flex">
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="card1 d-flex justify-content-center w-100 align-items-center">
                            <div className="row px-3 justify-content-center mt-2 mb-3 border-line m-auto">
                                <img src="https://i.imgur.com/uNGdWHi.png" className="image" alt="ChatBox App"/> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card2 bg-transparent card border-0 px-0 py-3">
                            <AuthForm/>
                            <div className="row mb-4 px-0"> 
                                <small className="font-weight-bold text-white fw-bold">
                                    Don't have an account? <br/>
                                        <p 
                                            className="d-inline-block ml-sm-2 mb-2 text-web pointer m-0" 
                                            data-bs-toggle="modal" 
                                            data-bs-target="#contact"
                                        >
                                            Register
                                        </p>
                                </small> 
                            </div>
                        </div>
                    </div>
                    
                    <AuthRegister/>
                    
                </div>
                <div className="bg-glassmorphism  py-3 w-100 text-white">
                    <div className="row px-3"> <small className="ml-4 ml-sm-5">Copyright &copy; by Jean Victor Rada</small></div>
                </div>
            </div>
        </div>
    )
}
