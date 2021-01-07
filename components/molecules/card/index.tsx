import React, { ReactNode } from 'react'

import classnames from 'classnames'

import styles from './index.module.scss'

type Props = {
  children: ReactNode
  className: string
}

const Card = ({className, children}: Props) => (
  <div className={classnames(styles.card, classnames)}>
    {children}
  </div>
)