import styled, { css } from 'styled-components'
import { CgCheckO } from 'react-icons/cg'
import A from '../../components/a/a'
import Button from '../../components/button/button'

export const StyledBody = styled.div`
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  height: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: ${props => props.isMobile ? '0' : '0 2.5rem'};
  height: fit-content;
`;

export const StyledIntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr ${props => !props.isMobile && '1fr'};
  border-radius: ${props => props.isMobile ? 0 : 1}rem;
  background-color: ${props => props.theme.colors.secondary};
  padding: 1rem 0 0 1rem;
  width: 100%;
  height: fit-content;
  flex: 1 0 auto;
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

export const StyledIntroCreateButton = styled(A)`
  color: ${props => props.theme.colors.onPrimary};
  background: ${props => props.theme.colors.primary};
  margin: 3rem 1rem ${props => props.isMobile ? 0 : 3}rem 1rem;
  ${props => !props.isMobile && css`width: 50%;`};
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
  padding: 5rem 1rem;
  width: 100%;
  height: fit-content;
  flex: 1 0 auto;
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
  display: ${props => props.isMobile ? 'flex' : 'grid'};
  flex-flow: column;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: fit-content;
  flex: 1 0 auto;
`;

export const StyledStepWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 1rem;
  height: fit-content;
  flex: 1 0 auto;
`;

export const StyledStepImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
`;

export const StyledStepImage = styled.img`
  width: 75%;
  height: 75%;
  margin: auto;
  object-fit: contain;
`;

export const StyledStepTextWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledStepNumber = styled(StyledText)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 2px solid ${props => props.theme.colors.onSecondary};
  border-radius: 50%;
  flex: 2 0 auto;
`;

export const StyledStepText = styled(StyledText)`
  text-align: unset;
  padding-left: 0.25rem;
`

export const StyledStartContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  width:100%;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: ${props => props.isMobile ? 0 : 1}rem;
  height: fit-content;
  flex: 1 0 auto;
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