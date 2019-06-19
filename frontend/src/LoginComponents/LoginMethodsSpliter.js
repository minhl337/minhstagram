import React from 'react'

const LoginMethodsSpliter = (props) => {
    return(
        <div className='spliter'>
            <div className='spliter-content'>
                <div className='split-line'></div>
                <div className='split-text'>{props.text}</div>
                <div className='split-line'></div>
            </div>
        </div>
    )
}

export default LoginMethodsSpliter