import React from 'react'
import PictureCard from './PictureCard'

class PictureRow extends React.Component {

    makeEmptyCard = (number) => {
        let cards = []
        for (let i = 0; i < number; i++) {
            cards.push(<PictureCard showDetail={null} card={null}/>)
        }
        return cards
    }
    render() {
        return(
            <div className='pic-row'>
                {this.props.pictures.map(pic => <PictureCard showDetail={this.props.showDetail} card={pic}/>)}
                {this.props.pictures.length === 3 ? null : this.makeEmptyCard(3 - this.props.pictures.length)}
            </div>
        )
    }
}

export default PictureRow