import React, { ReactNode } from 'react'

import style from './index.module.scss'

import { Navigation } from '../../organisms'
import { Container } from '../../atoms'

type Props = {
  title: string
  children: ReactNode
  onCloseClick: () => void
}

const NewsArticle = ({children, title, onCloseClick}: Props) => {
  return (
    <div className={style.newsArticle}>
        <Navigation withoutButton isPopup onClick={onCloseClick}>{title || 'Title' }</Navigation>
        <div className={style.innerContent}>
          <Container>
            {children}
          </Container>
        </div>
    </div>
  )
}

export { NewsArticle }