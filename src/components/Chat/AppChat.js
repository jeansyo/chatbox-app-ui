import React, { useEffect } from 'react'
import { socket } from '../../socket/socket';

import './chat.css'
import { ChatUsers } from './ChatUsers';
import { FormChat } from './FormChat';
import { LatestMessages } from './LatestMessages';
import { stringToHslColor } from '../../helpers/stringToHslColor';
import { useDispatch, useSelector } from 'react-redux'
import { _messageRemoveAlert, _messageSetAlert } from '../../actions/messageActions';
import { __authLogout } from '../../actions/authActions';

export const AppChat = () => {

    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.emit("client-connected")
    }, [])

    useEffect(() => {
        socket.on("server-alert", (alert) => {
            dispatch( _messageSetAlert( alert ) );
            setTimeout( () => dispatch( _messageRemoveAlert() ), 3000 )
        })

        return () => {
            dispatch( _messageRemoveAlert() )
            socket.off()
        }
    }, [dispatch])

    const handleOnLogout = () => {
        dispatch( __authLogout() )
    }

    return (
        <div className="chat-container">

        <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card chat-app m-0">
                        <ChatUsers/>
                        <div className="chat">
                            <div className="chat-header clearfix">
                                <div className="row">
                                    <div className="col-lg-6 d-flex flex-nowrap align-items-center my-1 mb-2">
                                        <div
                                            className="name-avatar m-0 me-1"
                                            style={{
                                                background: `${ stringToHslColor( user.name, 50, 80 ) }`
                                            }}
                                        >
                                            {
                                                user.name.charAt(0).toUpperCase()
                                            }
                                        </div>
                                        <div className="chat-about text-white">
                                            <h6 className="m-b-0">
                                                {
                                                    user.name
                                                }
                                            </h6>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6 hidden-sm text-right">
                                        <a className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
                                        <a className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
                                        <a className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
                                        <a className="btn btn-outline-warning"><i className="fa fa-question"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <LatestMessages/>
                            <div className="chat-message clearfix">
                                <div className="input-group mb-0 d-flex flex-nowrap pb-2">
                                    <FormChat/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    className="position-fixed top-0 end-0 m-2 badge bg-danger"
                    style={{
                        maxWidth: '100px',
                        cursor: "pointer"
                    }}
                    onClick={ handleOnLogout }
                >
                    Logout
                </div>
            </div>
            </div>
        </div>
    )
}
