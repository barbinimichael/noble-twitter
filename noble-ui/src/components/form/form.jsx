import React from 'react'
import PropTypes from 'prop-types'
import { StyledForm } from './style'

const Form = ({ type, value, onChange, className }) => {
  return (
    <StyledForm type={type} value={value} onChange={onChange} className={className} />
  )
}

Form.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Form;