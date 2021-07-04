import styled from 'styled-components'
import A from '../../components/a/a'
import Button from '../../components/button/button'
import NavBar from '../../components/navBar/navBar'

export const StyledNavBar = styled(NavBar)`
  position: static;
  max-width: unset;
  margin: 1rem auto 2rem auto;
  padding: 0;
  a {
    margin: 0 auto;
    div {
      font-size: ${props => props.theme.font.h2};
    }
    svg {
      margin: 0;
    }
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 3rem;
  }
`;

export const StyledBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  align-items: center;
  height: 100%;
  width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 4rem;
    margin: 0;
  }
`;

export const StyledContainer = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 1rem;
  margin: 0 1rem;
  height: fit-content;
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 0.5rem;
  max-width: calc(100% - 2rem);

  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    max-width: calc(100% - 4rem);
    padding: 2rem;
    margin: 0 2rem;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const StyledTitle = styled.div`
  text-align: center;
  font-size: ${props => props.theme.font.h2};
  font-weight: bold;
  text-align: center;
  margin: 0 auto 1rem auto;
  color: ${props => props.theme.colors.onSecondary};

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.font.h1};
    margin: 0 auto 3rem auto;
    white-space: nowrap;
  }
`;

export const StyledLink = styled(A)`
  height: fit-content;
  flex: 1 0 auto;
  color: ${props => props.theme.colors.onSecondary};
  text-decoration: underline;
  flex: 1 0 auto;
  white-space: normal;
  text-align: center;
  margin: 1rem;
  :hover {
    color: ${props => props.theme.colors.onSecondary};
  }
`;

export const StyledSignUpButton = styled(Button)`
  display: flex;
  align-items: center;
  margin: 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onPrimary};
  border-radius: 0.375rem;
  font-size: ${props => props.theme.font.body};
  flex: 1 0 auto;
  white-space: wrap;
  svg {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 0.5rem;
    background-color: ${props => props.theme.colors.onPrimary};
    border-radius: 50%;
  }
`;