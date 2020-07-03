import React, { useState, useEffect } from 'react'
import classes from './Image.module.css'
// const images = require('../../back/fetcher')

export const Image = () => {
  const [imageInfo, setImageInfo] = useState([])
  const [imageId, setImageId] = useState([])

  useEffect(() => {
    fetch(
      `https://picsum.photos/id/${Math.floor(Math.random() * 500) + 1}/info`
    )
      .then((res) => res.json())
      .then((data) => {
        setImageInfo(data.author)
        setImageId(data.id)
      })
  }, [])

  return (
    <>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(https://picsum.photos/id/${imageId}/300)`,
        }}
      ></div>
      <h3>Author: {imageInfo}</h3>
    </>
  )
}
