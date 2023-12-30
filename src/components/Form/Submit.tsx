import styled from 'styled-components';
import Button from '../Button';

const Submit = styled(Button)({
  background: '#c7d5de',
  color: '#1A414C',
  borderWidth: '1px',
  borderRadius: '4px',
  borderStyle: 'outset',
  marginTop: '16px',
  fontSize: '16px',
  cursor: 'pointer',
  borderColor: '#daeaf5',
  textDecoration: 'none',
  padding: '4px 16px',
  transition: 'background-color 0.25s linear, border-color 0.3s linear',
  '&:focus, &:hover': {
    background: '#f0f8fd',
    border: '1px inset #daeaf5',
    color: '#224C58',
  },
});

export default Submit;