import React, { CSSProperties, ReactNode } from 'react'
import styles from './index.module.scss'

import classnames from 'classnames'

type Props = {
  children: ReactNode
  style?: CSSProperties
  className?: string
  href?: string
  isBlock?: string
}

const Button = ({href, style, className, children, isBlock}: Props) => {
  return (
    <a href={href} style={style} className={classnames(styles.button, className)} role="button" data-is-block={isBlock}>{children}</a>
  )
}

export { Button }