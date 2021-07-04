import React from 'react'
import { useTranslation } from 'react-i18next'
import { FcGoogle } from 'react-icons/fc'
import {
  StyledContainer, StyledTitle, StyledLink, StyledSignUpButton, StyledBody, StyledNavBar
} from './style'

const SignUp = () => {
  const { t } = useTranslation()
  const elements = []

  const handleSignUp = () => {
    window.location = 'https://api.nobulltwitter.com/auth/google'
  }

  return (
    <StyledBody>
      <StyledNavBar elements={elements} />
      <StyledContainer>
        <StyledTitle>{t('authentication.signUp')}</StyledTitle>
        <StyledSignUpButton onClick={handleSignUp}>
          <FcGoogle />
          {t('authentication.signUpGoogle')}
        </StyledSignUpButton>
        <StyledLink href='/login'>{t('authentication.alreadyHaveAccount')}</StyledLink>
      </StyledContainer>
    </StyledBody>
  )
}

export default SignUp;