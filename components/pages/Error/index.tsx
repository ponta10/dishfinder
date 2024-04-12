'use client'
import Image from 'next/image'
import styled from 'styled-components'
import logo from '../../../public/blackLogo.png'
import { Button } from '@/components/atoms/Button/'
import { useRouter } from 'next/navigation'
import { theme } from '@/styles/theme.css'

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
  font-size: 40px;
  margin-top: -16px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
const Text = styled.p`
  font-size: 18px;
`

export const Error = () => {
  const router = useRouter()
  return (
    <Container>
      <Image width={200} height={200} alt="ロゴ" src={logo} />
      <Title>ページが表示できません</Title>
      <Text>ご不便をおかけし申し訳ございません。</Text>
      <Button
        text="トップに戻る"
        bgcolor={theme.color.primary}
        textcolor={theme.color.white}
        fontSize={theme.fontSize.lg}
        onClick={() => router.push('/')}
      />
    </Container>
  )
}
