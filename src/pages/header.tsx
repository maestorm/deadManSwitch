import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { HomePerson } from 'styled-icons/fluentui-system-filled';
import { Contacts } from 'styled-icons/typicons';
import { ManageAccounts } from 'styled-icons/material';
import { SignIn, SignOut } from 'styled-icons/octicons';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
`;

interface HeaderProps {
  isSigned: boolean,
  signOut: () => void,
  signIn?: () => {}
}

const H1 = styled('h1')({
  display: 'flex',
  flexDirection: 'row',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '16pt',
  margin: '4px 0',
});

const TitleWrapper = styled('div')({
  display: 'flex',
  margin: '0 40px',
  flexGrow: 1
});

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

const Header = ({ isSigned, signOut, signIn }: HeaderProps) => (
  <>
    <GlobalStyles />
    <TitleWrapper>
      <H1>Dead man switch</H1>
    </TitleWrapper> 
    {isSigned ? (
      <>
        <StyledLink href="/"><HomePerson />home</StyledLink>
        <StyledLink href="/contact"><Contacts />contacts</StyledLink>
        <StyledLink href="/management"><ManageAccounts />management</StyledLink>
        <StyledLink href="#" onClick={() => signOut()}><SignOut />Sign out</StyledLink>
      </>
    ) : <StyledLink href="#" onClick={() => signIn && signIn()}><SignIn />Sign in</StyledLink>
    }
  </>
)

export default Header;
