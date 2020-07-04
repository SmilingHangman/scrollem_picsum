import React, { useState, useEffect } from 'react'
import classes from './InfiniteList.module.css'
import Image from '../Image'

export const InfiniteList = () => {
  const [listItems, setListItems] = useState(
    Array.from(Array(6).keys(), (n) => n + 1)
  )

  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 500))
    return () =>
      window.removeEventListener('scroll', debounce(handleScroll, 500))
  }, [])

  useEffect(() => {
    if (!isFetching) return
    fetchMoreListItems()
  }, [isFetching])

  const debounce = (func, delay) => {
    let inDebounce
    return function () {
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => {
        func.apply(this, arguments)
      }, delay)
    }
  }

  function handleScroll() {
    if (
      // window.innerHeight + document.documentElement.scrollTop !==
      window.innerHeight +
        document.documentElement.scrollTop +
        document.documentElement.scrollTop / 1.7 <=
      document.documentElement.offsetHeight
    )
      return
    setIsFetching(true)
  }
  function fetchMoreListItems() {
    setListItems((prevState) => [
      ...prevState,
      ...Array.from(Array(6).keys(), (n) => n + prevState.length + 1),
    ])
    setIsFetching(false)
  }

  return (
    <>
      <ul>
        {listItems.map((listItem) => (
          <li key={listItem}>
            <Image />
          </li>
        ))}
      </ul>
      {isFetching && 'Fetching more list items...'}
    </>
  )
}

export default InfiniteList
