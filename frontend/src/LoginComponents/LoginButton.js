import React from 'react'

const LoginButton = (props) => {
    return(
        <div className='button-container'>
            <button className='login-button' onClick={props.checkAccount ? () => props.checkAccount(props.info, 'Username or password is incorrect') : () => props.checkCreateAccount(props.info, 'Passwords need to match')}>
                <div className='login-label'>
                    {props.name}
                </div>
            </button>
        </div>
    )
}

export default LoginButton