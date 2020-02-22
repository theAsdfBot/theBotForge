import React, { FunctionComponent, ChangeEvent, Fragment } from 'react'

type FormTextProps = {
  onChange: (e: ChangeEvent<HTMLElement>) => void,
  type: string,
  name: string,
  placeholder: string,
  value: string,
  maxLength?: number,
  disabled?: boolean
  error?: string,
  classes?: string,
  // classes (additional classes that modifies the default classes should we need to?)
}

const FormText: FunctionComponent<FormTextProps> = ({ type, name, placeholder, value, onChange, maxLength, disabled, error, classes }) => {
  return (
    <Fragment>
      <input className={classes} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} maxLength={maxLength} disabled={disabled} />
      <span>{error ? error : ''}</span>
    </Fragment>
  )
}

FormText.defaultProps = {
  maxLength: 20,
  disabled: false,
  classes: 'border border-solid border-gray-400',
  error: ''
} as Partial<FormTextProps>

export default FormText