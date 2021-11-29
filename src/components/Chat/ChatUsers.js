import React, { useEffect } from 'react'
import { socket } from '../../socket/socket';
import { ChatUsersAvatar } from './ChatUsersAvatar';
import { useSelector, useDispatch } from 'react-redux';
import { _userSetUsers } from '../../actions/userActions';

export const ChatUsers = () => {

    const dispatch = useDispatch();
    const { users } = useSelector(state => state.user)

    useEffect(() => {
        socket.on( 'users-online', (payload) => {
            console.log(payload)
            dispatch( _userSetUsers( payload ) )
        } )
    }, [dispatch])

    return (
        <div id="plist" className='people-list'>
        <p className="fs-4 text-white text-glow fw-bold">
            Users Online
        </p>
        <ul className="list-unstyled chat-list mt-2 mb-0 text-white">
            {
                (!!users)
                    &&(
                        users.map( (user) => (
                            <ChatUsersAvatar key={ user._id } { ...user } />
                        ) )
                    )
            }
        </ul>
        </div>
    )
}
