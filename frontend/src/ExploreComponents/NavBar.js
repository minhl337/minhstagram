import React from 'react' 
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        return(
            <div className='navbar'>
                <div className='nav-contents-container'>
                    <div className='nav-content nav-left'>
                        <Link to='/posts/new' className='page-link makeNewPost'>
                            Make a New Post
                        </Link>
                        <button className='logout-button' onClick={() => {localStorage.clear(); window.location.assign('/')}}>
                                <div className='login-label'>
                                    Logout
                                </div>
                            </button>
                    </div>
                    <div className='nav-content search-div'>
                        <input type='text' className='search' placeholder="Search" onChange={this.props.handleChange ? this.props.handleChange : null}/>
                    </div>
                    <div className='nav-content'>
                        <div className='nav-links'>
                            <Link to='/explore' className='page-link'>
                                Explore
                            </Link>
                            <Link to='/' className='page-link'>
                                Likes
                            </Link>
                            <Link to='/mypost' className='page-link'>
                                My Posts
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}