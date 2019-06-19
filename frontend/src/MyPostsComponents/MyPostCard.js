import React from 'react'
const trash_icon = require('../assets/trash-icon.png')

const MyPostCard = (props) => {
    const name = JSON.parse(localStorage.user).name

    return(
        <div className='my-postcard'>
            <div style={{margin: '10px'}} className='card-userinfo'>
                <span style={{font: "bold 19px Arial"}}>{name}</span>
                <a href='#' onClick={() => props.handleDelete(props._id)} className='button'><img src={trash_icon} className='delete-icon' alt='delete'/></a>
            </div>
            <div className='mypost-img-container'>
                <img src={props.image_url} className='new-post-img' alt='Post Image'/>
            </div>
            <span style={{margin: '10px 10px 0px 10px', font: '19px Arial'}}>{props.title}</span>
            <div style={{
                margin: '10px',
                marginTop: '5px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start'
            }}>
                <span style={{marginRight: '5px', font: "bold 14px Arial", lineHeight: '18px'}}>{name}</span>
                <span style={{font: "14px Arial", lineHeight: '18px'}}>{props.description}</span>
            </div>
            
        </div>
    )
}

export default MyPostCard