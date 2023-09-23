'use client'
import { SpTop } from '@/components/pages/Sp/Top'
import { Top } from '@/components/pages/Top'
import { mediaQuery, useMediaQuery } from '@/hooks/useMediaQeury'

export default function Home() {
  const isSp = useMediaQuery(mediaQuery.sp)

  if (isSp) {
    return <SpTop />
  }

  return <Top />
}
