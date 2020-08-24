import React from 'react'
import Photo from './Photo'

const PhotoContainer = props => {


  const results = props.data

  let photos = results.map(photo => {
    const urlSource = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg` 
   return (<Photo url={urlSource}
                  key={photo.id}
   />)
  })

  console.log(props)

          

      return(
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
        {photos} 
        </ul>
        </div>
      )
    }
  




export default PhotoContainer






