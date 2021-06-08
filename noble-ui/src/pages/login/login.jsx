import React from 'react'
import { useTranslation } from 'react-i18next'
import { FcGoogle } from 'react-icons/fc'
import NavBar from '../../components/navBar/navBar'
import { StyledContainer, StyledTitle, StyledText, StyledLink, StyledSignUpButton, StyledWrapper } from './style'

const Login = () => {
  const { t } = useTranslation()
  const elements = []

  const handleLogin = () => {
    window.location = 'https://api.nobulltwitter.com/auth/google'
  }

  return (
    <>
      <NavBar elements={elements} />
      <StyledContainer>
        <StyledWrapper>
          <StyledTitle>{t('authentication.login')}</StyledTitle>
          <StyledText>{t('authentication.loginDescription')}</StyledText>
          <StyledSignUpButton onClick={handleLogin}><FcGoogle /></StyledSignUpButton>
        </StyledWrapper>
        <StyledLink href='/signUp'>{t('authentication.doNotHaveAccount')}</StyledLink>
      </StyledContainer>
    </>
  )
}

export default Login;