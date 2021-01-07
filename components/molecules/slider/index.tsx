import React from 'react'

import styles from './index.module.scss'

type SliderArgs = {
  name: string
  image: JSX.Element
  link?: string
}

type Props = {
  data: SliderArgs
}

const Slider = ({data}: Props) => {

  const SliderDummy = [
    {
      name: 'Pickpockets',
      image: <img src="//unsplash.it/500" />,
      link: 'https:/google.com'
    }
  ]
  return (
    <div className={styles.slider}>
      {data.map((slide, i) => (
        <div className={styles.slide}>
          {slide.image}
          <p>{slide.name}</p>
        </div>
      ))}
    </div>
  )
}

export {Slider}