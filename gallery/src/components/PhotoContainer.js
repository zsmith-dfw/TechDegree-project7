import React from 'react'
import Photo from './Photo'

const PhotoContainer = props => {


  const results = props.data

  let photos = results.map(photo => {
    const urlSource = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` 
   return (<Photo url={urlSource}/>)
  })

          

      return(
        <ul className="photo-container">
        <h2>Results</h2>
        {photos} 
        </ul>
      )
    }
  




export default PhotoContainer

