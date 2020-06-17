import React, { FunctionComponent, ChangeEvent, Fragment } from 'react'

type FormInputProps = {
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

const FormInput: FunctionComponent<FormInputProps> = ({ type, name, placeholder, value, disabled, error, onChange, maxLength, size, classes }) => {
  return (
    <Fragment>
      <input
        className={`border border-solid ${error ? 'border-red-logo' : `border-gray-400`} bg-black-netflix rounded px-2 py-2 text-white ${classes}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        maxLength={maxLength}
        size={size}
      />
      {/* error? <InputError error={error}/> */}
    </Fragment>
  )
}

FormInput.defaultProps = {
  maxLength: 50,
  size: 20,
  disabled: false,
  classes: '',
  error: ''
} as Partial<FormInputProps>

export default FormInput