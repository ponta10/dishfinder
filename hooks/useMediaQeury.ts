import { useEffect, useState } from 'react'

export const mediaQuery = {
  sp: 'width < 752px',
  tablet: '752px <= width < 1122px',
  pc: '1122px <= width',
}

export const useMediaQuery = (query: string) => {
  const formattedQuery = `(${query})`
  const [match, setMatch] = useState<boolean | null>(null) // 初期値をnullに設定

  useEffect(() => {
    const mql = window.matchMedia(formattedQuery)
    setMatch(mql.matches)

    if (mql.media === 'not all' || mql.media === 'invalid') {
      console.error(`useMediaQuery Error: Invalid media query`)
    }

    mql.onchange = (e) => {
      setMatch(e.matches)
    }

    return () => {
      mql.onchange = null
    }
  }, [formattedQuery, setMatch])

  return match
}
