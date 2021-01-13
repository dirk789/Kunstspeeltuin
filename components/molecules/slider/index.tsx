import React, {useState} from 'react'

import styles from './index.module.scss'

import { NewsArticle } from './../../organisms/newsArticle'

type SliderArgs = {
  name?: string
  image: JSX.Element
  popUpContent?: JSX.Element
  link?: string
}

type Props = {
  data: Array<SliderArgs>
  hasNoPopup?: boolean
}

const Slider = ({data, hasNoPopup}: Props) => {

  const [openPopup, setOpenPopup] = useState(undefined)


  return (
    <div className={styles.slider}>
      {data.map((slide, i) => (
        <a href={slide.link}>
          <div className={styles.slide} onClick={() => setOpenPopup(i)}>
            {slide.image}
            <p>{slide.name}</p>
          </div>
        </a>

      ))}

        {(openPopup != undefined && !hasNoPopup) &&
        <NewsArticle title={data[openPopup].name} onCloseClick={() => setOpenPopup(undefined)}>
            {data[openPopup].image}
            {data[openPopup].popUpContent && data[openPopup].popUpContent}
        </NewsArticle>
        }
    </div>
  )
}

export {Slider}