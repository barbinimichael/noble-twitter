import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { GiPolarBear } from 'react-icons/gi'
import { AiOutlineMenu } from 'react-icons/ai'
import {
  StyledNavContainer, StyledLogoContainer, StyledButtonContainer, StyledButton, StyledTitle,
  StyledNavMenu, StyledMenu
} from './style'

const NavBar = ({ elements, className }) => {
  const [windowWidth, setWindowWidth] = useState()
  const [buttonX, setButtonX] = useState()
  const [logoX, setLogoX] = useState()
  const [openMenu, setOpenMenu] = useState(false);

  const buttonRef = useRef()
  const logoRef = useRef()
  const { t } = useTranslation()

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    handleBound(buttonRef, buttonX, setButtonX)
    handleBound(logoRef, logoX, setLogoX)
  }, [windowWidth])

  const handleBound = (ref, bound, setBound) => {
    const { x, width } = ref.current?.getBoundingClientRect() ?? {};
    if (x + width > window.innerWidth) {
      setBound(x + width);
    } if (window.innerWidth > bound) {
      setBound();
    }
  }

  const buttonElements = elements.map((e, i) => (
    <StyledButton key={i} href={e.link}>
      {t(e.titleKey)}
    </StyledButton>
  ))

  return (
    <>
      <StyledNavContainer expand='md' logoOnly={logoX} className={className}>
        <StyledLogoContainer href='/' >
          <GiPolarBear />
          <StyledTitle ref={logoRef} show={!logoX} >
            {t('title')}
          </StyledTitle>
        </StyledLogoContainer>
        <StyledButtonContainer ref={buttonRef} show={!buttonX}>
          {buttonElements}
        </StyledButtonContainer>
        {buttonX && (
          <StyledNavMenu onClick={() => setOpenMenu(o => !o)}>
            <AiOutlineMenu />
          </StyledNavMenu>
        )}
      </StyledNavContainer>
      <StyledMenu show={openMenu}>
        {buttonElements}
      </StyledMenu>
    </>
  )
}

NavBar.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    titleKey: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }))
}

export default NavBar;