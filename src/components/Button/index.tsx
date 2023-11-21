import styled from 'styled-components';

const Button = styled('button')({
    color: '#6f6f6f',
    background: '#f8f8f8',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',

    '&:focus, &:hover': {
        background: '#999999',
        color: '#fff'
    }
});

export default Button;