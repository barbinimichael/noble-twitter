import React from 'react'
import NavBar from '../../components/navBar/navBar'
import { useTranslation } from 'react-i18next'
import { mobileCheck } from '../../utils/utils'
import {
  StyledBody, StyledContainer, StyledIntroContainer, StyledTextContainer, StyledTitle, StyledText, StyledImage,
  StyledCheckContainer, StyledCheckWrapper, StyledCheck, StyledSubTitleContainer, StyledSubTitle, StyledStepContainer,
  StyledStepWrapper, StyledStepImage, StyledStartContainer, StyledStartButtonContainer, StyledCreateButton,
  StyledCoffeeButton, StyledStartTitle
} from './style'
import desktopIcon from '../../assets/icons/desktop.svg'
import createIcon from '../../assets/icons/create.svg'
import followIcon from '../../assets/icons/follow.svg'
import receiveIcon from '../../assets/icons/receive.svg'

const Landing = () => {
  const { t } = useTranslation()
  const isMobile = mobileCheck();

  const navBarElements = [
    { titleKey: 'header.login', link: '/login' },
    { titleKey: 'header.signUp', link: '/signUp' }
  ]

  const checks = [
    { key: 'landing.checkBoxes.distractionFree' }, { key: 'landing.checkBoxes.personalizedContent' },
    { key: 'landing.checkBoxes.allInOne' }
  ]

  const checkElements = checks.map(c => (
    <StyledCheckWrapper>
      <StyledCheck />
      {t(c.key)}
    </StyledCheckWrapper>
  ))

  const steps = [
    { key: 'landing.steps.create', icon: createIcon },
    { key: 'landing.steps.follow', icon: followIcon },
    { key: 'landing.steps.receive', icon: receiveIcon }
  ]

  const stepElements = steps.map(s => (
    <StyledStepWrapper isMobile={isMobile}>
      <StyledStepImage src={s.icon} alt='' />
      <StyledText>{t(s.key)}</StyledText>
    </StyledStepWrapper>
  ))

  return (
    <StyledBody>
      <NavBar elements={navBarElements} />
      <StyledContainer isMobile={isMobile}>
        <StyledIntroContainer isMobile={isMobile}>
          <StyledTextContainer>
            <StyledTitle>
              {t('landing.title')}
            </StyledTitle>
            <StyledCheckContainer isMobile={isMobile}>
              {checkElements}
            </StyledCheckContainer>
          </StyledTextContainer>
          <StyledImage src={desktopIcon} alt='' isMobile={isMobile} />
        </StyledIntroContainer>
        <StyledSubTitleContainer>
          <StyledSubTitle isMobile={isMobile}>{t('landing.subTitle')}</StyledSubTitle>
          <StyledText>{t('landing.description')}</StyledText>
        </StyledSubTitleContainer>
        <StyledStepContainer isMobile={isMobile}>
          {stepElements}
        </StyledStepContainer>
        <StyledStartContainer isMobile={isMobile}>
          <StyledStartTitle>{t('landing.getStarted.getStarted')}</StyledStartTitle>
          <StyledStartButtonContainer isMobile={isMobile}>
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