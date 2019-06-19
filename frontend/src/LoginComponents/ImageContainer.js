import React from 'react'

const ImageContainer = (props) => {
    let pic = require(`../assets/${props.pic}`)
    return(
        <div className='img-container'>
            <img src={pic} className='home-picture' alt='home cover'/>
        </div>
    )
}

export default ImageContainer