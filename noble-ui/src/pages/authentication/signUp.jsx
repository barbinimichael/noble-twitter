import React from 'react'
import { useTranslation } from 'react-i18next'
import NavBar from '../../components/navBar/navBar'
import { StyledContainer, StyledTitle, StyledLink, StyledSignUpButton, StyledBody } from './style'

const SignUp = () => {
  const { t } = useTranslation()
  const elements = []

  const handleSignUp = () => {
    window.location = 'https://api.nobulltwitter.com/auth/google'
  }

  return (
    <StyledBody>
      <NavBar elements={elements} />
      <StyledContainer>
        <StyledTitle>{t('authentication.signUp')}</StyledTitle>
        <StyledSignUpButton onClick={handleSignUp}>{t('authentication.signUpGoogle')}</StyledSignUpButton>
        <StyledLink href='/login'>{t('authentication.alreadyHaveAccount')}</StyledLink>
      </StyledContainer>
    </StyledBody>
  )
}

export default SignUp;