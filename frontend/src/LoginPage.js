import React from 'react'
import LoginContainer from './LoginContainer'
import ImageContainer from './LoginComponents/ImageContainer'
import SignupPage from './SignupPage'

class LoginPage extends React.Component {

    state = {
        login: true,
    }

    loginToSignup = () => {
        this.setState({
            login: !this.state.login
        })
        this.props.claerError()
    }
    render() {
        return (
            <div className='home-container'>
                <ImageContainer pic='rocket.jpg'/>
                {this.state.login ? <LoginContainer loginToSignup={this.loginToSignup} checkAccount={this.props.checkAccount} error={this.props.error} login={this.state.login}/> : <SignupPage checkCreateAccount={this.props.checkCreateAccount} loginToSignup={this.loginToSignup} error={this.props.error} checkAccount={this.props.checkAccount} login={this.state.login}/>}
            </div>
        )
    }
}

export default LoginPage