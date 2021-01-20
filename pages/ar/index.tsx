import React from 'react'

import style from './index.module.scss'

const ARPage = () => {
  return (
    <div className={style.ar}>
        <a href="/public/Balloons.usdz" rel="ar">
            <img src="/public/images/fiona.jpg" />
        </a>
    </div>
  )
}
export default ARPage