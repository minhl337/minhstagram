import React from 'react'
import NavBar from './ExploreComponents/NavBar'
import PictureGrid from './ExploreComponents/PictureGrid'

export default class Explore extends React.Component {
    
    render() {
        return !!localStorage.user ? 
            <div className='explore-page'>
                <NavBar />
                <PictureGrid />
            </div>
        : 
        <React.Fragment>
        <NavBar />
        <h1>Not found</h1>
        </React.Fragment>
    }
}

