import React from 'react'

const image = {
  height: '100%',
  objectFit: 'cover',
  borderRadius: '30px',
  display: 'block'
}

const ImageContainer = ({src, height}) => (
  <div style={{height}}>
    <img 
      src={src} 
      alt="book's cover" 
      style={image} 
    />
  </div>
)

export default ImageContainer