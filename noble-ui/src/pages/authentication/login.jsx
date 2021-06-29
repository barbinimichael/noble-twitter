import React from 'react'
import { useTranslation } from 'react-i18next'
import NavBar from '../../components/navBar/navBar'
import { StyledBody, StyledContainer, StyledTitle, StyledLink, StyledSignUpButton } from './style'

const Login = () => {
  const { t } = useTranslation()
  const elements = []

  const handleLogin = () => {
    window.location = 'https://api.nobulltwitter.com/auth/google'
  }

  return (
    <StyledBody>
      <NavBar elements={elements} />
      <StyledContainer>
        <StyledTitle>{t('authentication.login')}</StyledTitle>
        <StyledSignUpButton onClick={handleLogin}>{t('authentication.loginGoogle')}</StyledSignUpButton>
        <StyledLink href='/signUp'>{t('authentication.doNotHaveAccount')}</StyledLink>
      </StyledContainer>
    </StyledBody>
  )
}

export default Login;