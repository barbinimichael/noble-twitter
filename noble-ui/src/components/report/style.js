import styled from 'styled-components'

export const StyledBody = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  background-color: ${props => props.theme.colors.onPrimary};
  box-sizing: border-box;
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  margin: 2rem;
  padding: 2.5rem 0 0 5rem;
`;

export const StyledDateText = styled.div`
  font-size: ${props => props.theme.font.h1};
`;

export const StyledNameText = styled.div`
  font-size: ${props => props.theme.font.h3};
`;

export const StyledTimeText = styled.div`
  font-size: ${props => props.theme.font.h4};
`;

export const StyledImage = styled.img`
  border-radius: 1rem;
  height: 10rem;
  width: 10rem;
  object-fit: fill;
`;

export const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
`;

export const StyledTweet = styled.div`
  display: flex;
  flex-flow: column;
  margin: 2.5rem;
`;