import React from 'react'
import PropTypes from 'prop-types'
import { StyledForm } from './style'

const Form = ({ type, value, onChange, placeholder, className }) => {
  return (
    <StyledForm type={type} value={value} onChange={onChange} placeholder={placeholder} className={className} />
  )
}

Form.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default Form;