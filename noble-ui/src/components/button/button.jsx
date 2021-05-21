import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './style'

const Button = ({ children, className }) => {
  return (
    <StyledButton className={className}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Button;