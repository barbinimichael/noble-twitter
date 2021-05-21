import styled from 'styled-components'

export const StyledBody = styled.div`
  overflow-y: auto;
  height: inherit;
`;
export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2.5rem 5rem 0 5rem;
  background-color: ${props => props.theme.colors.primary};
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

export const StyledTitle = styled.div`
  font-size: ${props => props.theme.font.h1};
  margin-left: 1rem;
  color: ${props => props.theme.colors.onPrimary};
`;

export const StyledText = styled.div`
  font-size: ${props => props.theme.font.body};
  margin-left: 1rem;
  margin-top: 2rem;
  color: ${props => props.theme.colors.onPrimary};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  object-fit: fill;
`;