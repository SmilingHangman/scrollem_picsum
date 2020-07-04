import React from 'react'
import classes from './Image.module.css'
import { useFetch } from '../CustomHook/useFetch'

export const Image = () => {
  const [imageInfo, imageId, hasError] = useFetch()

  return (
    <>
      {!hasError && (
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(https://picsum.photos/id/${imageId}/300)`,
          }}
        >
          {hasError && 'Oops! No image, sorry :('}
        </div>
      )}
      {!hasError && <h3>Author: {imageInfo}</h3>}
      {/* {hasError ? <h3>No author either :'(</h3> : <h3>Author: {imageInfo}</h3>} */}
    </>
  )
}
