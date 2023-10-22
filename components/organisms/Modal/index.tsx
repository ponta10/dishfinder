import React, { ReactNode, useEffect } from 'react'
import { css, keyframes, styled } from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  width?: number
}

const fadeIn = keyframes`
from {
    transform: translateY(20%) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

interface ModalContentProps {
  open: boolean
  width: number
}

const ModalContent = styled.div<ModalContentProps>`
  width: ${(props) => props.width}px;
  background: #fff;
  padding: 40px;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  position: relative;
  border-radius: 4px;
  animation: ${(props) =>
    props.open
      ? css`
          ${fadeIn} 0.5s ease-out forwards
        `
      : 'none'};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  max-height: 50vh;
`

const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  width = 400,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  if (!open) return null
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        width={width}
        open={open}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseIcon onClick={onClose} />
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}
