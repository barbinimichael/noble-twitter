import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 0.5rem;
  font-size: ${props => props.theme.font.body};
  font-weight: ${props => props.theme.font.weight};
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border-radius: 1rem;
  border: unset;
  transition: all 0.25s;
  white-space: nowrap;
  user-select: none;

  :hover {
    transform: scale(1.05);
  }

  :disabled {
    opacity: 0.25;
    transform: unset;
  }
`;