import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class PictureCard extends React.Component {

    handleClick = () => {
        window.location.assign(`/${this.props.card._id}`)
    }

    render() {
        return(
            !!this.props.card ? 
                <Link to={`/${this.props.card._id}`} className='pic-card'>
                <div className='pic-card-container'>
                <img src={this.props.card.image_url} className='pic-card-img' alt='post picture'/>
                </div>
            </Link>
            : 
            <div className='pic-card'>
                <div className='pic-card-container' style={{backgroundColor: '#fafafa'}}>
                    {/* <img src={this.props.card.image_url} className='pic-card-img' alt='post picture'/> */}
                </div>
            </div>
        )
    }

}
    

export default PictureCard