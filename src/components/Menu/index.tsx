import styled from 'styled-components';

const Menu = styled('div')({
  background: '#ececec',
  display: 'flex',
  width: '100%',
  margin: '16px 0',
  padding: '8px 0',
  'a:not("last-of-type")': {
    marginRight: '24px',
  },
  a: {
    background: '#ddd',
    color: '#222',
    borderWidth: '1px',
    borderRadius: '4px',
    borderStyle: 'outset',
    margin: '0 16px', 
    borderColor: '#ddd',
    textDecoration: 'none',
    padding: '4px 16px',
    transition: 'background-color 0.25s linear, border-color 0.3s linear',
    '&:focus, &:hover': {
      background: '#fafafa',
      border: '1px inset #eee',
      color: '#222',
    },
    '&:active': {
      background: '#fff',
      color: '#111',
    },
  },
});

export default Menu;
