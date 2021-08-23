import styled, { keyframes } from 'styled-components';
import { BsFillCircleFill } from 'react-icons/bs'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;;
`;

const load = keyframes`
  0% {
    opacity: 0.05;
  }
  100% {
    opacity: 1;
  }
`;

export const Circle = styled(BsFillCircleFill)`
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  color: ${props => props.theme.colors.primary};
  opacity: 0;
  animation: 1s ${load} infinite ease-in-out alternate;
  animation-delay: ${props => props.i / 2}s;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    width: 20%;
    height: 20%;
  }
`;