import React from 'react'

const LoginInput = (props) => {
    return (
        <div className='login-input'>
            <input onChange={props.handleChange} name={props.name} className='login-textbox' type={props.type} maxLength={props.maxLength} require='true' placeholder={props.label}/>
        </div>
    )
} 

export default LoginInput