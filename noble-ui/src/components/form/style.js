import styled from 'styled-components'

export const StyledForm = styled.input`
  padding: 0 1rem;
  margin: 0.1rem;
  font-size: ${props => props.theme.font.body};
  font-weight: ${props => props.theme.font.weight};
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border-radius: 1rem;
  border: 0.1rem solid ${props => props.theme.colors.primary};
  transition: all 0.1s;
  outline: none;

  :hover {
    transform: scale(1.01);
  }
`;