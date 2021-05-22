import styled from 'styled-components'

export const StyledForm = styled.form`
  padding: 0.5rem;
  font-size: ${props => props.theme.font.body};
  font-weight: ${props => props.theme.font.weight};
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border-radius: 1rem;
  border: 0.1rem solid ${props => props.theme.colors.primary};
  transition: all 0.1s;

  :hover {
    transform: scale(1.05);
  }
`;