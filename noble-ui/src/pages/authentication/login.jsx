import React from 'react'
import { useTranslation } from 'react-i18next'
import { FcGoogle } from 'react-icons/fc'
import {
  StyledBody, StyledContainer, StyledTitle, StyledLink, StyledSignUpButton, StyledNavBar
} from './style'

const Login = () => {
  const { t } = useTranslation()
  const elements = []

  const handleLogin = () => {
    window.location = 'https://api.nobulltwitter.com/auth/google'
  }

  return (
    <StyledBody>
      <StyledNavBar elements={elements} />
      <StyledContainer>
        <StyledTitle>{t('authentication.login')}</StyledTitle>
        <StyledSignUpButton onClick={handleLogin}>
          <FcGoogle />
          {t('authentication.loginGoogle')}
        </StyledSignUpButton>
        <StyledLink href='/signUp'>{t('authentication.doNotHaveAccount')}</StyledLink>
      </StyledContainer>
    </StyledBody>
  )
}

export default Login;