import React from 'react'

const Errorbox = (props) => {
    return(
        <div>
            <p style={{color: 'red'}}>{props.error}</p>
        </div>
    )
}

export default Errorbox