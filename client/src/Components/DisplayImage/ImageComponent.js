import React from 'react'

const ImageComponent = (props) =>{

    return(
        <div>
            <b>It will make your day</b><br/>
            <img src={process.env.PUBLIC_URL + '/wild.jpg'} alt = 'Image' style = {{ width : 800}} />
            <img src={process.env.PUBLIC_URL + '/image.jpg'} alt = 'Image' style = {{ width : 800}} />
            <img src={process.env.PUBLIC_URL + '/river.jpg'} alt = 'Image' style = {{ width : 800}} />
            <img src={process.env.PUBLIC_URL + '/wp.jpg'} alt = 'Image' style = {{ width : 800}} />
        </div>
    )
}

export default ImageComponent