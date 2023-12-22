import styled from 'styled-components';

const Menu = styled('div')({
  background: '#b5d8ed',
  display: 'flex',
  width: '100%',
  margin: '16px 0',
  borderTop: '1px solid #436877',
  borderBottom: '1px solid #dbedf5',
  padding: '8px 0',
  'a:not("last-of-type")': {
    marginRight: '24px',
  },
  a: {
    background: '#8bb9d3',
    color: '#1A414C',
    borderWidth: '1px',
    borderRadius: '4px',
    borderStyle: 'outset',
    margin: '0 16px', 
    borderColor: '#98C9D7',
    textDecoration: 'none',
    padding: '4px 16px',
    transition: 'background-color 0.25s linear, border-color 0.3s linear',
    '&:focus, &:hover': {
      background: '#D3E8EE',
      border: '1px inset #D3E8EE',
      color: '#224C58',
    },
    '&:active': {
      background: '#fff',
      color: '#224C58',
    },
  },
});

export default Menu;
