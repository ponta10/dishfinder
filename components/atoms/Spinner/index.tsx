import styled, { keyframes } from 'styled-components'

const CubeGridAnimation = keyframes`
  0%, 70%, 100% {
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale3D(0, 0, 1);
  }
`

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  gap: 16px;
`

const CubeGridSpinner = styled.div`
  width: 60px;
  height: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6px;

  & > div {
    width: 100%;
    height: 100%;
    background-color: #ffa234;
    animation: ${CubeGridAnimation} 1.3s infinite ease-in-out;
  }

  & > div:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > div:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > div:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > div:nth-child(4) {
    animation-delay: 0.1s;
  }
  & > div:nth-child(5) {
    animation-delay: 0.2s;
  }
  & > div:nth-child(6) {
    animation-delay: 0.3s;
  }
  & > div:nth-child(7) {
    animation-delay: 0s;
  }
  & > div:nth-child(8) {
    animation-delay: 0.1s;
  }
  & > div:nth-child(9) {
    animation-delay: 0.2s;
  }
`

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
`

const Text = styled.p`
  color: #fff;
  animation: ${fadeInOut} 1.5s infinite;
  font-weight: bold;
  font-size: 20px;
`

export const Spinner = () => (
  <Container>
    <CubeGridSpinner>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </CubeGridSpinner>
    <Text>Loading...</Text>
  </Container>
)
