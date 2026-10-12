// useFetch.js
// Reusable custom hook for fetching JSON data and tracking loading and error states.
import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    async function loadData() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Failed to load menu data')
        }

        const result = await response.json()

        if (isMounted) {
          setData(result)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadData()

    return () => {
      isMounted = false
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch
