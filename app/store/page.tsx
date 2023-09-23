'use client'
import { SpStorePage } from '@/components/pages/Sp/StorePage'
import { StorePage } from '@/components/pages/StorePage'
import { mediaQuery, useMediaQuery } from '@/hooks/useMediaQeury'
import React from 'react'

const store = () => {
  const isSp = useMediaQuery(mediaQuery.sp)

  if (isSp) {
    return <SpStorePage />
  }
  return <StorePage />
}

export default store
