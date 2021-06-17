import styled from 'styled-components'

export const StyledA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
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
  cursor: pointer;
  text-decoration: unset;

  :hover {
    transform: scale(1.05);
  }
`;