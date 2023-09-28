'use client'
import Image from 'next/image'
import styled from 'styled-components'
import logo from '../public/blackLogo.png'
import { Button } from '@/components/atoms/Button'
import { useRouter } from 'next/navigation'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  margin-top: -24px;
`

const Title = styled.h2`
  font-size: 48px;
  margin-top: -16px;
`

function NotFoundPage() {
  const router = useRouter()
  return (
    <Container>
      <Image width={200} height={200} alt="ロゴ" src={logo} />
      <Title>404 Not Found</Title>
      <Button
        text="トップに戻る"
        bgcolor="#ffa234"
        fontSize="18px"
        onClick={() => router.push('/')}
      />
    </Container>
  )
}

export default NotFoundPage
