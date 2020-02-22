import React, { FunctionComponent, ChangeEvent, Fragment } from 'react'

type FormTextProps = {
  onChange: (e: ChangeEvent<HTMLElement>) => void,
  type: string,
  name: string,
  placeholder: string,
  value: string,
  disabled?: boolean
  error?: string,
  maxLength?: number,
  size?: number,
  classes?: string,// classes (additional classes that modifies adds onto the default classes (maybe more margin or padding)?)
}

const FormText: FunctionComponent<FormTextProps> = ({ type, name, placeholder, value, disabled, error, onChange, maxLength, size, classes }) => {
  return (
    <Fragment>
      <input
        className={`border border-solid border-gray-400 rounded ${classes}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        maxLength={maxLength}
        size={size}
      />
      <span>{error ? error : ''}</span>
    </Fragment>
  )
}

FormText.defaultProps = {
  maxLength: 20,
  size: 20,
  disabled: false,
  classes: '',
  error: ''
} as Partial<FormTextProps>

export default FormText