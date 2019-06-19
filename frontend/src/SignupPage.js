import React from 'react'
import LoginInput from './LoginComponents/LoginInput'
import LoginButton from './LoginComponents/LoginButton'
import LoginMethodsSpliter from './LoginComponents/LoginMethodsSpliter'
import SignUpContainer from './LoginComponents/SignUpContainer'
import MobieAppContainer from './LoginComponents/MobieAppContainer'
import Error from './LoginComponents/Errorbox'

export default class SignupPage extends React.Component {

    state = {
        username: '',
        password: '',
        passwordConfirm: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {
        return(
            <div>
                <div className='lisa'>
                <div className='login-container gr27e'>
                    <h1 className='login-logo'>!Minhstagram</h1>
                    <LoginInput handleChange={this.handleChange} name='username' type='text' label='Phone number or username' maxLength='30'/>
                    <LoginInput handleChange={this.handleChange} name='password' type='password' label='Password' maxLength='30'/>
                    <LoginInput handleChange={this.handleChange} name='passwordConfirm' type='password' label='Confirm Password' maxLength='30'/>
                    <LoginInput handleChange={this.handleChange} name='email' type='text' label='Email' maxLength='30'/>
                    <LoginButton name='Sign up' checkCreateAccount={this.props.checkCreateAccount} info={this.state}/>
                    <LoginMethodsSpliter text='OR' />
                    <Error error={this.props.error}/>
                </div>
                <SignUpContainer loginToSignup={this.props.loginToSignup} login={this.props.login}/>
                <MobieAppContainer />
            </div>
            </div>
        )
    }
}