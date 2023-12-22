import styled from 'styled-components';
import Button from '../Button';

const Submit = styled(Button)({
  background: '#8bb9d3',
  color: '#1A414C',
  borderWidth: '1px',
  borderRadius: '4px',
  borderStyle: 'outset',
  marginTop: '16px',
  fontSize: '16px',
  cursor: 'pointer',
  borderColor: '#98C9D7',
  textDecoration: 'none',
  padding: '4px 16px',
  transition: 'background-color 0.25s linear, border-color 0.3s linear',
  '&:focus, &:hover': {
    background: '#D3E8EE',
    border: '1px inset #D3E8EE',
    color: '#224C58',
  },
});

export default Submit;