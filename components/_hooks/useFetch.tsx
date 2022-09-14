import { AxiosInstance } from 'axios'
import { useEffect, useState } from 'react'
import Ierror from '../../types/error.interface'

export default function useFetch<T>(
  fetcher: AxiosInstance,
  url: string,
  params:Object= {}
): {
  readonly loading: boolean
  readonly error: Ierror
  readonly data: T
  readonly refetch: Function
} {
  const [data, setData] = useState<T>(),
    [error, setError] = useState<Ierror>(),
    [loading, setLoading] = useState<boolean>(false)

  async function handleFetch() {
    setLoading(true)
    try {
      const { data: responseData } = await fetcher.get(url,{params})
      setData(responseData)
    } catch (e) {
      setError(e)
    }
    setLoading(false)
  }

  useEffect(() => {
    //timeout for prevent preload page
    setTimeout(()=>handleFetch(),100)
  }, [])

  return {
    refetch: handleFetch,
    data,
    error,
    loading,
  }
}
