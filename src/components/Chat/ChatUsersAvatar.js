import React from 'react'
import { stringToHslColor } from '../../helpers/stringToHslColor'

export const ChatUsersAvatar = ({ name, _id }) => {

    const handleOnClick = () => {
        console.log(_id)
    }
 
    return (
        <li onClick={ handleOnClick } className="clearfix d-flex align-items-center" key={ _id }>
            <div
                className="name-avatar m-0 me-1"
                style={{
                    background: `${ stringToHslColor( name, 50, 80 ) }`
                }}
            >
                {
                    name.charAt(0)
                }
            </div>
            <div className="about">
                <div className="name text-white">
                    {
                        name
                    }
                </div>
                <div className="status text-white"> <i className="fa fa-circle online"></i> online </div>
            </div>
        </li>
    )
}
