import React, {ReactNode} from 'react'

import styles from './index.module.scss'

import classnames from 'classnames'

export type Props = {
  className?: string
  children: ReactNode
}

const Container = ({
  className,
  children
}: Props) => {
  return (
    <div className={classnames(styles.container, className)}>
      {children}
    </div>
  )
}

export { Container}