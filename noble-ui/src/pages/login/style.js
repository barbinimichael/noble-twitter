import styled from 'styled-components'
import A from '../../components/a/a'
import Button from '../../components/button/button'

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding: 2.5rem 0;
  background-color: ${props => props.theme.colors.primary};
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 0.5rem solid ${props => props.theme.colors.onPrimary};
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 60%;
  min-width: fit-content;
`;

export const StyledTitle = styled.div`
  font-size: ${props => props.theme.font.h1};
  text-align: center;
  margin: 0 auto;
  color: ${props => props.theme.colors.onPrimary};
`;

export const StyledText = styled.div`
  font-size: ${props => props.theme.font.body};
  margin-left: 1rem;
  color: ${props => props.theme.colors.onPrimary};
`;

export const StyledLink = styled(A)`
  color: ${props => props.theme.colors.onPrimary};
  text-decoration: underline;
  :hover {
    color: ${props => props.theme.colors.onPrimary};
  }
`;

export const StyledSignUpButton = styled(Button)`
  margin: 2.5rem;
  background-color: ${props => props.theme.colors.onPrimary};
  border-radius: 50%;
  svg {
    width: 5rem;
    height: 5rem;
  }
`;