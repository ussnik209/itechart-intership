import React from 'react'

const imageContainer = {
  height: '200px',
  borderColor: 'green',
  padding: '16px'
}

const image = {
  height: '100%',
  objectFit: 'cover',
  borderRadius: '30px',
  display: 'block'
}

const ImageContainer = ({imagePath}) => (
  <div style={imageContainer}>
    <img src={imagePath} alt="book's cover" style={image} />
  </div>
)

export default ImageContainer