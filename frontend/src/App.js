import React from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage'
import Explore from './Explore';
import NewPost from './NewPost'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  state = {
    currentUser: null,
    error: '',
  }

  claerError = () => {
    this.setState({error: ''})
  }

  checkAccount = (info, error) => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => {
        let user = users.find(acc => acc.name === info.username && acc.password === info.password)
        !!user ? 
        this.setCurrentUser(user)
        : this.setError(error)
    })
  }

  checkCreateAccount = (info, error) => {
    // debugger
    if (info.username.length >= 1 && info.password === info.passwordConfirm && info.email.length >= 1) {
      this.createAccount({
        name: info.username, 
        password: info.password,
        email: info.email
      })
    } else {
      this.setError(error)
    }
  }

  createAccount = (user) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if (!!data.details) {
        this.setError(data.details[0].message)
      } else {
        this.setCurrentUser(data)
      }
    })
  }

  setCurrentUser = (user) => {
    this.setState({
      error: ''
    })
    localStorage.setItem('user', JSON.stringify(user));
    this.props.history.push('/explore')
  }

  setError = (error) => {
    this.setState({error: error})
  }

  renderPage = () => {
    if (!!localStorage.user) {
      return <Explore />
    } else {
      switch(this.props.page) {
        case '/':
          return <LoginPage claerError={this.claerError} {...this.props} checkCreateAccount={this.checkCreateAccount} checkAccount={this.checkAccount} error={this.state.error}/>
        case '/explore':
          return <Explore />
        default:
            return <LoginPage claerError={this.claerError} {...this.props} checkCreateAccount={this.checkCreateAccount} checkAccount={this.checkAccount} error={this.state.error}/>
      }
    }
  }

  render() {
    return this.renderPage()
  }

  componentWillUnmount() {
    this.setState({
      error: ''
    })
  }
}

export default App;
