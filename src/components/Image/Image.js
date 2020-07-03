import React, { useState, useEffect } from 'react'
import classes from './Image.module.css'
// import { useFetch } from '../CustomHook/useFetch'

export const Image = () => {
  const [imageInfo, setImageInfo] = useState([])
  const [imageId, setImageId] = useState([])
  const [hasError, setHasError] = useState(false)
  // const [response, loading, hasError] = useFetch(`https://picsum.photos/id/${Math.floor(Math.random() * 500) + 1}/info`)

  useEffect(() => {
    fetch(
      `https://picsum.photos/id/${Math.floor(Math.random() * 500) + 1}/info`
    )
      .then((res) => res.json())
      .then((data) => {
        setImageInfo(data.author)
        setImageId(data.id)
      })
      .catch((err) => setHasError(true))
  }, [])

  return (
    <>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(https://picsum.photos/id/${imageId}/300)`,
        }}
      >
        {hasError && 'Oops! No image, sorry :('}
      </div>
      {hasError ? <h3>No author either :'(</h3> : <h3>Author: {imageInfo}</h3>}
    </>
  )
}
