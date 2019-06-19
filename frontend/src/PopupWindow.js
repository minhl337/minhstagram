import React from 'react'
import {Link} from 'react-router-dom'

class PopupWindow extends React.Component {

    handleClose = () => {
        window.history.back()
    }
    
    render() {
        document.body.style.overflow = 'hidden'
        return(
            <div className='popup-bg'>
                <div className='pop-container'>
                    <div className='pop-window'>
                        <div className='pop-top'>
                        <span style={{margin: '10px 10px', font: 'bold 20px Arial'}}>{this.props.card.title}</span>
                            <div className='close-container'>
                                <Link to='/explore' >
                                    <span className="close" >&times;</span>
                                </Link>
                            </div>
                        </div>
                        <div className='popup-img-container'>
                            <img src={this.props.card.image_url} className='popup-img' alt='user-pic'/>
                        </div>
                        <span style={{margin: '10px 10px 0px 10px', font: '19px Arial'}}>{this.props.card.title}</span>
                        <div style={{
                            margin: '10px',
                            marginTop: '5px',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start'
                        }}>
                            {/* <span style={{marginRight: '5px', font: "bold 14px Arial", lineHeight: '18px'}}>{name}</span> */}
                            <span style={{font: "14px Arial", lineHeight: '18px'}}>{this.props.card.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        document.body.style.overflow = 'auto'
    }
}

export default PopupWindow