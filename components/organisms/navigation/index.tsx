import React, {ReactNode} from 'react'

import styles from './index.module.scss'
//@ts-ignore
import Hamburger from './../../../public/svg/hamburger.svg'

import {Container, Button} from './../../atoms'
import classnames from 'classnames'

export type Props = {
  className?: string
  isLarge?: boolean
  bodyText?: string
  children: ReactNode
}

const Navigation = ({
  className,
  isLarge,
  children,
  bodyText
}: Props) => {
  return (
    <header className={classnames(styles.header, className)} data-is-large={isLarge || undefined}>
      <Container>
        <div className={styles.menuContainer}>
          <Hamburger className={styles.hamburger} width={38} />
        </div>
        
        <h1>{children}</h1>
        <p>{bodyText}</p>

        <Button>Bekijk Nu</Button>
       
      </Container>
    </header>
  )
}

export {Navigation}