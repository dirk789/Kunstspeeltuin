import React, { CSSProperties, ReactNode } from 'react'

import style from './index.module.scss'

type Props = {
  children: ReactNode
  index: number
  customCSS?: CSSProperties
}


const Number = ({children, index, customCSS}: Props) => (
  <div className={style.numberContainer} style={customCSS}>
    <div className={style.number}>
      {index}
    </div>
    {children}
  </div>
)

export {Number}