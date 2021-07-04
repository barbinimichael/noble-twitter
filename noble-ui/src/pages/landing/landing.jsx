import React from 'react'
import NavBar from '../../components/navBar/navBar'
import { useTranslation } from 'react-i18next'
import {
  StyledBody, StyledContainer, StyledIntroContainer, StyledTextContainer, StyledTitle, StyledText, StyledImage,
  StyledCheckContainer, StyledCheckWrapper, StyledCheck, StyledSubTitleContainer, StyledSubTitle, StyledStepContainer,
  StyledStepWrapper, StyledStepImage, StyledStartContainer, StyledStartButtonContainer, StyledCreateButton,
  StyledCoffeeButton, StyledStartTitle, StyledStepImageWrapper, StyledStepText, StyledStepNumber, StyledStepTextWrapper,
  StyledIntroCreateButton, StyledClose
} from './style'
import desktopIcon from '../../assets/icons/desktop.svg'
import createIcon from '../../assets/icons/create.svg'
import followIcon from '../../assets/icons/follow.svg'
import receiveIcon from '../../assets/icons/receive.svg'

const Landing = () => {
  const { t } = useTranslation()

  const navBarElements = [
    { titleKey: 'header.login', link: '/login' },
    { titleKey: 'header.signUp', link: '/signUp' }
  ]

  const checks = [
    { key: 'landing.checkBoxes.dailyUpdates' }, { key: 'landing.checkBoxes.allTweets' },
    { key: 'landing.checkBoxes.noExtra', x: true }
  ]

  const checkElements = checks.map(c => (
    <StyledCheckWrapper key={c.key}>
      {c.x ? <StyledClose /> : <StyledCheck />}
      {t(c.key)}
    </StyledCheckWrapper>
  ))

  const steps = [
    { key: 'landing.steps.create', icon: createIcon },
    { key: 'landing.steps.follow', icon: followIcon },
    { key: 'landing.steps.receive', icon: receiveIcon }
  ]

  const stepElements = steps.map((s, i) => (
    <StyledStepWrapper key={s.key}>
      <StyledStepImageWrapper>
        <StyledStepImage src={s.icon} alt='' />
      </StyledStepImageWrapper>
      <StyledStepTextWrapper >
        <StyledStepNumber>{i + 1}</StyledStepNumber>
        <StyledStepText>{t(s.key)}</StyledStepText>
      </StyledStepTextWrapper>
    </StyledStepWrapper>
  ))

  return (
    <StyledBody>
      <NavBar elements={navBarElements} />
      <StyledContainer>
        <StyledIntroContainer>
          <StyledTextContainer>
            <StyledTitle>
              {t('landing.title')}
            </StyledTitle>
            <StyledCheckContainer>
              {checkElements}
            </StyledCheckContainer>
            <StyledIntroCreateButton href='/signUp'>
              {t('landing.getStarted.createAnAccount')}
            </StyledIntroCreateButton>
          </StyledTextContainer>
          <StyledImage src={desktopIcon} alt='' />
        </StyledIntroContainer>
        <StyledSubTitleContainer>
          <StyledSubTitle >{t('landing.subTitle')}</StyledSubTitle>
          <StyledText>{t('landing.description')}</StyledText>
        </StyledSubTitleContainer>
        <StyledStepContainer>
          {stepElements}
        </StyledStepContainer>
        <StyledStartContainer >
          <StyledStartTitle>{t('landing.getStarted.getStarted')}</StyledStartTitle>
          <StyledStartButtonContainer >
            <StyledCreateButton href='/signUp'>
              {t('landing.getStarted.createAnAccount')}
            </StyledCreateButton>
            <StyledCoffeeButton onClick={() => window.open('https://ko-fi.com/nobulltwitter')}>
              {t('landing.getStarted.buyCoffee')}
            </StyledCoffeeButton>
          </StyledStartButtonContainer>
        </StyledStartContainer>
      </StyledContainer>
    </StyledBody>
  )
}

export default Landing;