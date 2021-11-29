import React from 'react';
import Loader from "react-js-loader";

export const WaitScreen = () => {
    return (
        <div 
            style={{ width: '100%', height: '100vh', display:'flex', alignItems: 'center', justifyContent:'center', background: 'rgba(19, 2, 39, 0.945)' }}
        >
            <Loader type="bubble-ping" bgColor={"#f6f6f6"}  size={100} />
        </div>
    )
}
