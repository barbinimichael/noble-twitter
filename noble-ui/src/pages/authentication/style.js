import styled from 'styled-components'
import A from '../../components/a/a'
import Button from '../../components/button/button'

export const StyledBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 100%;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 0 2rem;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 4rem;
    margin: 0;
  }
`;

export const StyledTitle = styled.div`
  text-align: center;
  font-size: ${props => props.theme.font.h2};
  font-weight: bold;
  text-align: center;
  margin: 0 auto 1rem auto;
  color: ${props => props.theme.colors.onSecondary};

  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.font.h1};
    margin: 0 auto 3rem auto;
    white-space: nowrap;
  }
`;

export const StyledLink = styled(A)`
  color: ${props => props.theme.colors.onSecondary};
  text-decoration: underline;
  flex: 1 0 auto;
  white-space: normal;
  text-align: center;
  :hover {
    color: ${props => props.theme.colors.onSecondary};
  }
`;

export const StyledSignUpButton = styled(Button)`
  margin: 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onPrimary};
  border-radius: 0.375rem;
  font-size: ${props => props.theme.font.body};
  flex: 1 0 auto;
  svg {
    width: 5rem;
    height: 5rem;
  }
`;