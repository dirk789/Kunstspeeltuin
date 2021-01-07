import React, {CSSProperties, ReactNode} from 'react'

import styles from './index.module.scss'

import classnames from 'classnames'

export type Props = {
  className?: string
  style?: CSSProperties
  children: ReactNode
}

const Container = ({
  className,
  children,
  style
}: Props) => {
  return (
    <div className={classnames(styles.container, className)} style={style}>
      {children}
    </div>
  )
}

export { Container}