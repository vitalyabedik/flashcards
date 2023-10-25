import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, customDelay?: number) => {
  const calculateDelay = (value: T) => {
    return value === '' ? 0 : 1500
  }

  const delay = customDelay !== undefined ? customDelay : calculateDelay(value)

  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
