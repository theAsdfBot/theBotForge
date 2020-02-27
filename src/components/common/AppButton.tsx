import React, { FunctionComponent } from 'react'

type AppButtonProps = {
  btnName: string,
  classes?: string,
  onClick: () => void
}

const AppButton: FunctionComponent<AppButtonProps> = ({
  btnName, classes, onClick
}) => {
  return (
    <button className={`btn ${classes}`} onClick={onClick}>
      {btnName}
    </button>
  )
}

export default AppButton