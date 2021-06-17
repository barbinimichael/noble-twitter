import styled, { css } from 'styled-components'
import { CgCheckO } from 'react-icons/cg'
import A from '../../components/a/a'
import Button from '../../components/button/button'

export const StyledBody = styled.div`
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  height: inherit;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: ${props => props.isMobile ? '0' : '0 2.5rem'};
`;

export const StyledIntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr ${props => !props.isMobile && '1fr'};
  border-radius: ${props => props.isMobile ? 0 : 1}rem;
  background-color: ${props => props.theme.colors.secondary};
  padding: 1rem 0 0 1rem;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

export const StyledTitle = styled.h1`
  font-size: ${props => props.theme.font.h1};
  color: ${props => props.theme.colors.onSecondary};
`;

export const StyledImage = styled.img`
  ${props => props.isMobile ? css`
    width: 80vw;
    height: 80vw;
  ` : css`
    width: 100%;
    height: 100%;`
  };
  margin: 0 auto;
  object-fit: fill;
`;

export const StyledCheckContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-top: 1rem;
`;

export const StyledCheckWrapper = styled.div`
  display: flex;
  font-size: ${props => props.theme.font.body};
  margin: 0.25rem;
  svg {
    height: 2rem;
    width: 2rem;
  }
`;

export const StyledCheck = styled(CgCheckO)`
  color: ${props => props.theme.colors.primary};
  margin-right: 0.25rem;
`;

export const StyledSubTitleContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 2rem 1rem;
`;

export const StyledSubTitle = styled.h2`
  font-size: ${props => props.isMobile ? props.theme.font.h2 : props.theme.font.h1};
  color: ${props => props.theme.colors.onSecondary};
  text-align: center;
`;

export const StyledText = styled.div`
  font-size: ${props => props.theme.font.body};
  margin-top: 1rem;
  color: ${props => props.theme.colors.onSecondary};
  text-align: center;
`;

export const StyledStepContainer = styled.div`
  display: grid;
  ${props => props.isMobile ? css`
    grid-template-rows: repeat(3, 1fr);
  ` : css`
    grid-template-columns: repeat(3, 1fr);
  `};
`;

export const StyledStepWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: ${props => props.isMobile ? '80' : '30'}vw;
  height: ${props => props.isMobile ? '80' : '30'}vw;
  margin: 1rem;
  padding: 3rem;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50%;
`;

export const StyledStepImage = styled.img`
  width: 50%;
  height: 50%;
  margin: auto;
  object-fit: fill;
`;

export const StyledStartContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  width:100%;
  margin-top: 2rem;
  padding-bottom: 2rem;
  border-radius: ${props => props.isMobile ? 0 : 1}rem;
`;

export const StyledStartTitle = styled(StyledSubTitle)`
  color: ${props => props.theme.colors.onPrimary};
  padding: 1rem 0;
`;

export const StyledStartButtonContainer = styled.div`
  display: flex;
  flex-flow: ${props => props.isMobile ? 'column' : 'row'};
`;

export const StyledCreateButton = styled(A)`
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.onPrimary};
  margin: 1rem;
`;

export const StyledCoffeeButton = styled(Button)`
  color: ${props => props.theme.colors.onPrimary};
  background: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.onPrimary};
  margin: 1rem;
`;