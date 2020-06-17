import React, { FunctionComponent } from 'react'

type OverlayProps = {
  classes?: string,
  styles?: any // style objects in case we want to hard card a specific height, etc.
}

const Overlay: FunctionComponent<OverlayProps> = ({ styles, classes }) => {
  return <div className={`overlay ${classes}`} style={styles} ></div >
}

Overlay.defaultProps = {
  styles: {},
  classes: ''
}

export default Overlay