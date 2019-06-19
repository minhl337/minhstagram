import React from 'react'
import LoginInput from './LoginComponents/LoginInput'
import LoginMethodsSpliter from './LoginComponents/LoginMethodsSpliter'
import LoginButton from './LoginComponents/LoginButton'
import SignUpContainer from './LoginComponents/SignUpContainer'
import MobieAppContainer from './LoginComponents/MobieAppContainer'
import Errorbox from './LoginComponents/Errorbox'

export default class LoginContainer extends React.Component {

    state = {
        username: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {
        return (
            <div className='lisa'>
                <div className='login-container gr27e'>
                    <h1 className='login-logo'>!Minhstagram</h1>
                    <LoginInput handleChange={this.handleChange} name='username' type='text' label='Phone number, username, or email' maxLength='30'/>
                    <LoginInput handleChange={this.handleChange} name='password' type='password' label='Password' maxLength='30'/>
                    <LoginButton name='Log In' checkAccount={this.props.checkAccount} info={this.state}/>
                    <LoginMethodsSpliter text='OR' />
                    {this.props.error.length === 0 ? null : <Errorbox error={this.props.error}/>}
                </div>
                <SignUpContainer loginToSignup={this.props.loginToSignup} login={this.props.login}/>
                <MobieAppContainer />
            </div>
        )
    }
}