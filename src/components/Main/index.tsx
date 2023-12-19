import styled from 'styled-components';

const Main = styled('div')({
  background: '#D3E8EE',
  display: 'flex',
  flexDirection: 'column',
  margin: '-8px',
  fontFamily: 'sans-serif',
  height: '100vh',

  form: {
    display: 'flex',
    minWidth: '100%',
    flexDirection: 'column',
    padding: '0 16px',

    button: {
      width: '150px',
    },

    'input, textarea': {
      background: '#f4f4f4',

      '&:focus-visible': {
        background: '#fff',
        outlineColor: '#ccc',
      },
    },
  },

  section: {
    padding: '0 16px',
  },
});

export default Main;
