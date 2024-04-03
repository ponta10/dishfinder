import React from 'react';
import { css } from '@/styled-system/css';

export interface ButtonProps {
  bgcolor?: string;
  textcolor?: string;
  text?: string;
  width?: string | number;
  fontSize?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  bgcolor,
  textcolor,
  ...props
}) => {
  return (
    <button
      className={css({
        backgroundColor: bgcolor || '#FFA234',
        color: textcolor || 'white',
        width: typeof props.width === 'number' ? `${props.width}px` : props.width || 'auto',
        fontSize: '32px',
        padding: '4px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.1s',
        '&:hover': {
          filter: 'brightness(105%)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          opacity: 0.6,
        },
      })}
      {...props}
    >
      {text}
    </button>
  );
};
