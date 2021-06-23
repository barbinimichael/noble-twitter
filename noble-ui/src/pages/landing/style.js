import styled from 'styled-components'
import { CgCheckO } from 'react-icons/cg'
import A from '../../components/a/a'
import Button from '../../components/button/button'

export const StyledBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  height: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: fit-content;
  max-width: 90rem;
  padding: 0 2rem;

  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    margin: 0 auto;
  }
`;

export const StyledIntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${props => props.theme.colors.secondary};
  padding: 3rem 2rem 3rem 2rem;
  width: 100%;
  height: fit-content;
  flex: 1 0 auto;
  border-radius: 8px;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    padding: 6rem 0 4rem 6rem;
    border-radius: 1rem;
  }
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

export const StyledTitle = styled.h1`
  font-size: 2em;
  color: ${props => props.theme.colors.onSecondary};
  font-weight: bold;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.font.h1};
  }
`;

export const StyledImage = styled.img`
  display: none;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    display: block;
    width: 25rem;
    height: 25rem;
    margin: 0 auto;
    object-fit: fill;
  }
`;

export const StyledIntroCreateButton = styled(A)`
  color: ${props => props.theme.colors.onPrimary};
  background: ${props => props.theme.colors.primary};
  margin: 3rem 1rem 0rem 0rem;
  border-radius: 6px;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    margin: 3rem 1rem 3rem 0rem;
    width: 50%;
  }
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
  padding: 2.5rem 1rem;
  width: 100%;
  height: fit-content;
  flex: 1 0 auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 5rem 2.4rem;
  }
`;

export const StyledSubTitle = styled.h2`
  font-size: ${props => props.theme.font.h2};
  color: ${props => props.theme.colors.onSecondary};
  text-align: center;
  font-weight: bold;

  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.font.h1};
  }
`;

export const StyledText = styled.div`
  font-size: ${props => props.theme.font.body};
  margin-top: 1rem;
  color: ${props => props.theme.colors.onSecondary};
  text-align: center;
`;

export const StyledStepContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: fit-content;
  flex: 1 0 auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
`;

export const StyledStepWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 1rem;
  height: fit-content;
  flex: 1 0 auto;
  margin-left: 0.25rem;
`;

export const StyledStepImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
`;

export const StyledStepImage = styled.img`
  width: 75%;
  height: 75%;
  margin: auto;
  object-fit: contain;
`;

export const StyledStepTextWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    width: 80%;
  }
`;

export const StyledStepNumber = styled(StyledText)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 3px solid ${props => props.theme.colors.onSecondary};
  border-radius: 50%;
  flex: 1 0 auto;
  margin-right: 0.8rem;
  font-weight: bold;
`;

export const StyledStepText = styled(StyledText)`
  text-align: unset;
  padding-left: 0.25rem;
  font-weight: bold;
  line-height: 1.6rem;
`

export const StyledStartContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  width:100%;
  margin-top: 2rem;
  margin-bottom: 4rem;
  padding: 2rem;
  height: fit-content;
  flex: 1 0 auto;
  border-radius: 8px;

  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    border-radius: 1rem;
  }
`;

export const StyledStartTitle = styled(StyledSubTitle)`
  color: ${props => props.theme.colors.onPrimary};
  padding: 1rem 0 0.4rem;
  font-weight: bold;
`;

export const StyledStartButtonContainer = styled.div`
  display: flex;
  flex-flow: column;

  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    flex-flow: row;
  }
`;

export const StyledCreateButton = styled(A)`
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.onPrimary};
  margin: 1rem;
  border-radius: 6px;
  padding: 0.4rem 1.4rem;
`;

export const StyledCoffeeButton = styled(Button)`
  color: ${props => props.theme.colors.onPrimary};
  background: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.onPrimary};
  margin: 1rem;
  border-radius: 6px;
  padding: 0.4rem 1.4rem;
`;