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
  withoutButton?: boolean
  isPopup?: boolean
  hasBackButton?: boolean
  buttonHref?: string
  onClick?: () => void
  children: ReactNode
}

const Navigation = ({
  className,
  isLarge,
  children,
  withoutButton,
  bodyText,
  isPopup,
  buttonHref,
  hasBackButton,
  onClick
}: Props) => {
  return (
    <header className={classnames(styles.header, className)} data-is-popup={isPopup || undefined} data-is-large={isLarge || undefined}>
      <Container>
        <div className={styles.menuContainer} onClick={onClick}>
          {!isPopup ? <Hamburger className={styles.hamburger} width={38} /> : <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1.35355" y1="0.646447" x2="17.3536" y2="16.6464" stroke="#485A56"/><line x1="0.646447" y1="16.6464" x2="16.6464" y2="0.646447" stroke="#485A56"/></svg>}
        </div>
        
        <h1>{children}</h1>
        <p>{bodyText}</p>

        {!withoutButton && <Button href={buttonHref} style={isPopup && {fontSize: 21}}>Bekijk Nu</Button>}
       
      </Container>
    </header>
  )
}

export {Navigation}