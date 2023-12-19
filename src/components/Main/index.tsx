import styled from 'styled-components';

const Main = styled('div')({
  display: 'flex',
  flexDirection: 'column',

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
