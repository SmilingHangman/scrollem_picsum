import { useState, useEffect } from 'react'

export const useFetch = () => {
  const [imageInfo, setImageInfo] = useState([])
  const [imageId, setImageId] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    fetch(
      `https://picsum.photos/id/${Math.floor(Math.random() * 500) + 1}/info`
    )
      .then((res) => res.json())
      .then((data) => {
        setImageInfo(data.author)
        setImageId(data.id)
      })
      .catch(() => {
        setHasError(true)
      })
  }, [])

  return [imageInfo, imageId, hasError]
}
