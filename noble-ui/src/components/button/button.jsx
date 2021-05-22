import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './style'

const Button = ({ onClick, children, className }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
}

export default Button;