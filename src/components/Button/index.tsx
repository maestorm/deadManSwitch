import styled from 'styled-components';

const Button = styled( 'button' )( {
  color: '#111',
  background: '#e5e5e5',
  border: '1px outset #ccc',
  padding: '4px 16px',
  '&:active, &:hover': {
    background: '#e5e5e5'
  },
  '&:active': {
    border: '1px inset #ccc',
    background: '#d5d5d5'
  }
} );

export default Button;