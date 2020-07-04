import { useState, useEffect } from 'react'
// function useFetch(url, opts) {
//   const [response, setResponse] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [hasError, setHasError] = useState(false)

//   useEffect(() => {
//     setLoading(true)
//     fetch(url, opts)
//       .then((res) => {
//         setResponse(res.data)
//         setLoading(false)
//       })
//       .catch(() => {
//         setHasError(true)
//         setLoading(false)
//       })
//   }, [url])

//   return [response, loading, hasError]
// }
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
