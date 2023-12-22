import styled from 'styled-components';

const Main = styled('div')({
  background: '#d0dde6',
  display: 'flex',
  flexDirection: 'column',
  margin: '-8px',
  fontFamily: 'sans-serif',
  height: '100vh',

  form: {
    display: 'flex',
    minWidth: '500px',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    margin: '16px',

    button: {
      width: '150px',
    },

    'input, textarea': {
      display: 'flex',
      background: '#f4f4f4',
      border: 0,
      width: '700px',
      marginBottom: '16px',

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
