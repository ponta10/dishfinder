import { useEffect, useState } from 'react'

export const mediaQuery = {
  sp: 'width < 752px',
  tablet: '752px <= width < 1122px',
  pc: '1122px <= width',
}

export const useMediaQuery = (query: string) => {
  const formattedQuery = `(${query})`
  const [match, setMatch] = useState<boolean | null>(null)

  useEffect(() => {
    const mql = matchMedia(formattedQuery)
    setMatch(mql.matches)

    if (mql.media === 'not all' || mql.media === 'invalid') {
      console.error(`useMediaQuery Error: Invalid media query`)
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setMatch(e.matches)
    }

    mql.addEventListener('change', handleChange)
    return () => {
      mql.removeEventListener('change', handleChange)
    }
  }, [formattedQuery, match])

  return match
}
