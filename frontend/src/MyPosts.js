import React from 'react'
import NavBar from './ExploreComponents/NavBar'
import MyInfoCard from './MyPostsComponents/MyInfoCard'
import MyPostCard from './MyPostsComponents/MyPostCard'

class MyPosts extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        fetch(`http://localhost:3000/posts`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                posts: data.filter(post => post.author === JSON.parse(localStorage.user)._id)
            })
        })
    }

    handleDelete = (id) => {
        fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE'
        })
        this.setState({
            posts: this.state.posts.filter(post => post._id !== id)
        })
    }

    render() {
        return(
            <div className='explore-page'>
                <NavBar />
                <div className='my-posts-container'>
                    <h2 className='explore-header'>My Posts</h2>
                    <div className='my-posts-container-row'>
                        <div className='my-posts-list'>
                            {this.state.posts.map(post => <MyPostCard handleDelete={this.handleDelete} {...post}/>)}
                        </div>
                        {/* <div className='my-info'>

                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}   

export default MyPosts