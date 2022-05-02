import React from 'react'

const imageContainer = {
  height: '200px',
  // padding: '16px'
}

const image = {
  height: '100%',
  objectFit: 'cover',
  borderRadius: '30px',
  display: 'block'
}

const ImageContainer = ({src}) => (
  <div style={imageContainer}>
    <img src={src} alt="book's cover" style={image} />
  </div>
)

export default ImageContainer