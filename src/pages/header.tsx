import Link from 'next/link';
import styled from 'styled-components';
import { HomePerson } from 'styled-icons/fluentui-system-filled';
import { Contacts } from 'styled-icons/typicons';
import { ManageAccounts } from 'styled-icons/material';
import { SignIn, SignOut } from 'styled-icons/octicons';

export const StyledLink = styled(Link)({
  display: 'flex',
  marginTop: '8px',
  alignItems: 'center',

  'svg': {
    height: '22px',
    padding: '0 6px 0 0',
    marginLeft: '-4px'
  }
});

const Header = ({ isSigned, signOut, signIn }) => isSigned ?
  <>
    <StyledLink href="/"><HomePerson />home</StyledLink>
    <StyledLink href="/contact"><Contacts />contacts</StyledLink>
    <StyledLink href="/management"><ManageAccounts />management</StyledLink>
    <StyledLink href="#" onClick={() => signOut({ callbackUrl: '/' })}><SignOut />Sign out</StyledLink>
  </> 
  : <StyledLink href="#" onClick={() => signIn()}><SignIn />Sign in</StyledLink>

export default Header;
