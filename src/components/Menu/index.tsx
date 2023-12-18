import styled from 'styled-components';

const Menu = styled( 'div' )( {
  background: '#ececec',
  display: 'flex',
  width: '100%',
  margin: '16px 0',
  padding: '8px 16px',
  justifyContent: 'space-between',
  'a:not("last-of-type")': {
    marginRight: '24px'
  },
  'a': {
    color: '#222',
    borderWidth: '1px',
    borderStyle: 'outset',
    borderColor: '#ccc',
    padding: '4px 16px',
    '&:focus, &:hover': {
      background: '#fafafa',
      border: '1px inset #ccc',
      color: '#222'
    },
    '&:active': {
      background: '#fff',
      color: '#111'
    }
  }
} );

export default Menu;