import React from 'react'
import NavBar from './ExploreComponents/NavBar'
import LoginInput from './LoginComponents/LoginInput'
import Errorbox from './LoginComponents/Errorbox'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import LoginButton from './LoginComponents/LoginButton'
export default class NewPost extends React.PureComponent {

    state = {
        title: '',
        description: '',
        image_url: '',
        imgValid: false,
        error: '',
        showError: false
    }

    handleChange = (e) => {
        if (e.target.name === 'image_url') {
            this.setState({
                imgValid: true,
                [e.target.name]: e.target.value,
                showError: false
            })
            
        } else {
            this.setState({
                [e.target.name]: e.target.value,
                showError: false
            })
        }
    }

    createPost = () => {
        let newImg = document.querySelector('.new-post-img')
        let newPost = {title: this.state.title, description: this.state.description, image_url: this.state.image_url, author: JSON.parse(localStorage.user)._id}
        if (this.state.title.length >= 1 && this.state.description.length >= 1 && !!newImg && this.state.imgValid) {
            fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newPost)
            })
            .then(() => {
                window.location.assign('/')
            })
        } else {
            this.throwErrror()
        }
        
    }

    throwErrror = () => {
        if (this.state.title === '') {
            this.setState({error: 'Title cannot be empty', showError: true})
        } else if (this.state.description === '') {
            this.setState({error: 'Description cannot be empty', showError: true})
        } else if (this.state.image_url === '') {
            this.setState({error: 'Image url cannot be empty', showError: true})
        } else if (!this.state.imgValid) {
            this.setState({error: 'Please enter a valid img url', showError: true})
        }
    }

    checkImg = () => {
        this.setState({
            imgValid: false
        })
    }

    render() {
        return(
                <div className='explore-page'>
                    <NavBar />
                    <div className='new-post-form-container'>
                        <h2 className='explore-header'>Create a new post</h2>
                        <div className='new-post-form'>
                            <div className='img-sample'>
                                {!!this.state.image_url ? 
                                    <img src={this.state.image_url} onError={this.checkImg} className='new-post-img' alt='not a valid image' />
                                : <p>Image display</p>  
                            }
                                
                            </div>
                            <LoginInput handleChange={this.handleChange} name='title' type='text' maxLength='75' require='true' label='Title'/>
                            <LoginInput handleChange={this.handleChange} name='description' type='text' maxLength='75' require='true' label='Description'/>
                            <LoginInput handleChange={this.handleChange} name='image_url' type='text' require='true' label='Image URL'/>
                            {this.state.showError ? <Errorbox error={this.state.error}/> : null}
                            <div className='button-container'>
                                <button className='login-button' onClick={this.createPost}>
                                    <div className='login-label'>
                                        Create
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}