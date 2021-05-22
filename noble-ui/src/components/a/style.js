import styled from 'styled-components'

export const StyledA = styled.a`
  padding: 0.5rem;
  font-size: ${props => props.theme.font.body};
  font-weight: ${props => props.theme.font.weight};
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border-radius: 1rem;
  border: unset;
  transition: all 0.1s;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  text-decoration: unset;

  :hover {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;