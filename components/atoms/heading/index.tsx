import React, {ReactNode} from 'react'

import styles from './index.module.scss'

import classnames from 'classnames'

export type Props = {
  className?: string
  tag?: 'h1' | 'h2' | 'h3'
  children: ReactNode
}

const Heading = ({
  className,
  children,
  tag: Tag
}: Props) => {
  return (
    <Tag className={classnames(styles.heading, className)} data-heading-type={Tag}>
      {children}
    </Tag>
  )
}

export { Heading }