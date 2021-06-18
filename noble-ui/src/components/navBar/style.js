import styled from 'styled-components'
import A from '../a/a'
import Button from '../button/button'

export const StyledNavContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  padding: 1rem 0.5rem;
  background-color: ${props => props.theme.colors.onPrimary};
  height: 5rem;
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

export const StyledNavMenu = styled(Button)`
  margin-left: auto;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.onPrimary};
  border: none;
`;

export const StyledMenu = styled.div`
  background-color: ${props => props.theme.colors.onPrimary};
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 5rem;
  right: 0;
  width: 100%;
  height: ${props => props.show ? (props.isMobile ? '100%' : '50%') : '0%'};
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
  border: solid ${props => props.theme.colors.primary};
  border-width: ${props => props.show ? '2px 0 2px 0' : '0'};
  transition: all 0.5s;
`;