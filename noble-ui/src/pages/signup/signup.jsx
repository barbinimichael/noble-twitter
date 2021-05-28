import React from 'react'
import { useTranslation } from 'react-i18next'
import { FcGoogle } from 'react-icons/fc'
import NavBar from '../../components/navBar/navBar'
import { StyledContainer, StyledTitle, StyledText, StyledLink, StyledSignUpButton, StyledWrapper } from './style'

const SignUp = () => {
  const { t } = useTranslation()
  const elements = []

  const handleSignUp = () => {
    console.log('auth', process.env.REACT_APP_AUTH_URL)
    window.open(process.env.REACT_APP_AUTH_URL, "_self")
  }

  return (
    <>
      <NavBar elements={elements} />
      <StyledContainer>
        <StyledWrapper>
          <StyledTitle>{t('authentication.signUp')}</StyledTitle>
          <StyledText>{t('authentication.signUpDescription')}</StyledText>
          <StyledSignUpButton onClick={handleSignUp}><FcGoogle /></StyledSignUpButton>
        </StyledWrapper>
        <StyledLink href='/login'>{t('authentication.alreadyHaveAccount')}</StyledLink>
      </StyledContainer>
    </>
  )
}

export default SignUp;