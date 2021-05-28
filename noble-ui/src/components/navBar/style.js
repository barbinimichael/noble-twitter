import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'
import A from '../a/a'

export const StyledNavContainer = styled(Navbar)`
  position: sticky;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  padding: 1rem 5rem;
  background-color: ${props => props.theme.colors.onPrimary};
`;

export const StyledLogoContainer = styled.a`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;
  text-decoration: unset;
  user-select: none;
  svg {
    margin: auto;
    width: ${props => props.theme.font.h1};
    height: ${props => props.theme.font.h1};
    color: ${props => props.theme.colors.primary};
  }
`;

export const StyledButtonContainer = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  flex-wrap: nowrap;
  margin-left: auto;
`;

export const StyledButton = styled(A)`
  margin: 0 1rem;
`;

export const StyledTitle = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  font-size: ${props => props.theme.font.body};
  margin-left: 1rem;
  color: ${props => props.theme.colors.primary};
`;