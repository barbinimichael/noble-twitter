import React from 'react'
import PropTypes from 'prop-types'
import { StyledA } from './style'

const A = ({ href, children, className }) => {
  return (
    <StyledA href={href} className={className}>
      {children}
    </StyledA>
  )
}

A.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
}

export default A;