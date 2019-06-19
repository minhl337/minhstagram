import React from 'react'
import PictureRow from './PictureRow'
import PopupWindow from '../PopupWindow'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class PictureGrid extends React.Component {

    state = {
        numberOfPics: 0,
        pictures: {},
        atBottom: false,
    }

    makeRoutes = () => {
        let allCards = []
        for (let key in this.state.pictures) {
            this.state.pictures[key].forEach(card => {
                allCards.push(<Route path={`/${card._id}`} render={props => <PopupWindow {...props} card={card}/> } />)
            })
        }
        return allCards
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true)
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(data => {
            this.setState({
                numberOfPics: data.length,
                pictures: this.makePicRows(data.slice(0, 24))
            })
        })
    }

    loadMorePics() {
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(data => {
            this.setState({
                numberOfPics: this.state.numberOfPics + data.length,
                atBottom: false,
                pictures: this.makePicRows(data.slice(0, this.state.numberOfPics + data.length))
            })
        })
    }

    makePicRows(pictures) {
        let counter = 0
        let rows = {}
        let row = []
        pictures.forEach(pic => {
            row.push(pic)
            if (row.length === 3) {
                rows[counter] = row
                row = []
                counter ++
            } 
        })
        if (row.length !== 0) {
            rows[counter] = row
        }
        return rows
    }

    renderRows() {
        let components = []
        for (let index in this.state.pictures) {
            components.push(<PictureRow showDetail={this.showDetail} pictures={this.state.pictures[index]}/>)
        }
        return components
    }

    handleScroll = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        const scrolled = window.scrollY
        if (Math.ceil(scrolled) === scrollable && this.state.atBottom === false) {
            this.setState({
                atBottom: true
            }, this.loadMorePics)
        }
    }
    render() {
        return(
            <React.Fragment>
                <Router>
                    {this.makeRoutes()}
                    <div className='pic-grid-container'>
                        <h2 className='explore-header'>Explore</h2>
                        <div className='pic-grid'>
                            {this.renderRows()}
                        </div>
                    </div>
                </Router>
            </React.Fragment>
        )
    }
}



