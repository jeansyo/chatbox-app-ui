import React, { useEffect, useRef } from 'react';
import { socket } from '../../socket/socket';
import { useSelector } from 'react-redux';
import { _messageSetMessages } from '../../actions/messageActions';
import { useDispatch } from 'react-redux'; 
import { v4 as uuidv4 } from 'uuid';

export const LatestMessages = () => {
    
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth)
    const {alert, messages} = useSelector(state => state.message)

    useEffect(() => {
        socket.on('receive-messages', (payload) => {
            dispatch( _messageSetMessages(payload) )
        })
    }, [dispatch])

    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' })
    })


    return (
        <div className="chat-history" >
            <ul className="m-b-0">

                {
                    (!!messages)
                        &&(
                            messages.reverse().map( ( { _id, name, message } ) => (
                                (_id === user._id)
                                    ?(
                                        
                                        <li className="clearfix" key={ uuidv4() }>
                                            <div className="message-data text-end me-1">
                                                <span className="text-white fw-light message-data-time mx-0">{ name }</span>
                                            </div>
                                            <div className="bg-primary text-white message my-message other-message float-right px-3 py-2">{ message }</div>
                                        </li>
                                    )
                                    :(
                                        <li className="clearfix" key={ uuidv4() }>
                                            <div className="message-data">
                                                <span className="text-white fw-light message-data-time mx-0">{ name }</span>
                                            </div>
                                            <div className="message px-3 py-2">{ message }</div>                                    
                                        </li>
                                    )
                            ) )
                        )
                }
                {
                    (!!alert)
                        &&(
                            <li className={ `fs-5 text-center text-${ alert.type }` }>
                                {
                                    alert.msg
                                }
                            </li>
                        )
                }
                <div ref={ divRef }></div>
            </ul>
        </div>
    )
}
