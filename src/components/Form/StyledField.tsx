import styled from 'styled-components';
import {
  Field
} from 'formik';

const StyledField = styled(Field)({
  marginTop: '4px',
  padding: '4px',

  '&:focus-visible': {
    outlineColor: '#64a2c6 !important'
  },

  '+ div': {
    background: '#f33d09',
    borderRadius: '4px',
    padding: '4px 8px',
    backgroundClip: 'padding-box',
    color: '#fff',
    margin: '-8px 0 16px 0' 
  }
});
  
export default StyledField;