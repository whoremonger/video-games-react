

//WARNING - not used in the app! App uses react router loaders instead

import { useState, useEffect } from 'react'

function useFetchData (url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('Error. Could not get the games from the server.')
          }
          return res.json()
        })
        .then(data => {
          setData(data)
          setIsLoading(false)
          setError(null)
        })
        .catch(err => {
          setIsLoading(false)
          setError(err.message)
        })
    }, 1000)
  }, [url])

  return { data, isLoading, error }
}

export default useFetchData