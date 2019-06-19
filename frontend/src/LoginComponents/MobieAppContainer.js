import React from 'react'

const appStore = require('../assets/app-store-logo.png')
const googlePlay = require('../assets/googleplay.png')

const MobieAppContainer = () => {
    return(
        <div className='mobie-app-container'>
            <div className='tbp10'>
                <p>Get the app.</p>
            </div>
            <div className='app-store-container'>
                <a className='app-store'>
                    <img className='app-store-logo' src={appStore} alt='app store'/>
                </a>
                <a className='app-store'>
                    <img className='app-store-logo' src={googlePlay} alt='google play'/>
                </a>
            </div>
        </div>
    )
}

export default MobieAppContainer