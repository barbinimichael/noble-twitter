import React from 'react'
import NavBar from '../../components/navBar/navBar'
import { useTranslation } from 'react-i18next'
import { StyledBody, StyledContainer, StyledTextContainer, StyledTitle, StyledText, StyledImage } from './style'
import mockup from '../../assets/images/mockup.png'

const Landing = () => {
  const { t } = useTranslation()

  const navBarElements = [
    { titleKey: 'header.login', link: '/login' },
    { titleKey: 'header.signUp', link: '/signup' }
  ]

  return (
    <>
      <NavBar elements={navBarElements} />
      <StyledBody>
        <StyledContainer>
          <StyledTextContainer>
            <StyledTitle>
              {t('landing.title')}
            </StyledTitle>
            <StyledText>
              {t('landing.description')}
            </StyledText>
          </StyledTextContainer>
          <StyledImage src={mockup} alt='' />
        </StyledContainer>
      </StyledBody>
    </>
  )
}

export default Landing;