import React from 'react'

const SignUpContainer = (props) => {
    return(
        <div className='signup'>
            <div className='signup-box'>
                {props.login ? <p>Don't have an account? <a href="#" onClick={props.loginToSignup}>Sign up</a></p> : <p>Already have an account? <a href="#" onClick={props.loginToSignup}>Log in</a></p>}
                
            </div>
        </div>
    )
}

export default SignUpContainer 