import styled from 'styled-components';

const Menu = styled('div')({
    background: '#e8e8e8',
    display: 'flex',
    width: '100%',
    margin: '16px 0',
    padding: '8px 16px',
    justifyContent: 'space-between',
    'a:not("last-of-type")': {
        marginRight: '24px'
    },
    'a': {
        color: '#6f6f6f',
        background: '#e8e8e8',
        border: '1px solid transparent',
        borderBottom: 0,
        borderRight: 0,
        borderRadius: '4px',
        padding: '4px 16px',
        '&:focus, &:hover': {
            background: '#eee',
            border: '1px solid #9e9e9e',
            borderBottom: 0,
            borderRight: 0,
            color: '#222',
            transition: 'background, border 1s',
        }
    } 
});

export default Menu;