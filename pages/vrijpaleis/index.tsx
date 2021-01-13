import React from 'react'

import styles from './index.module.scss'

import { Navigation } from './../../components/organisms'

import {Container} from './../../components/atoms'

import Image from 'next/image'

const VrijPaleisPage = () => {
  return (
    <div className={styles.vrijpaleis}>
      <Navigation withoutButton >
        Bezoek het vrijpaleis
      </Navigation>
      <Container>
        <Image src="/images/vp.jpg" width={375} height={187} />
        <h2>Wat is het Vrijpaleis?</h2>
        <p>Vrij Paleis - Een plek waar Vrij Denken, Kunst en Expressie samenkomen. Vrij Paleis maken we samen, het prinsesje dat ben jij!</p>
        <h2>Wat is er te zien?</h2>

        <div className={styles.toSee}>
          <Image src="/images/amsterdam.jpg" width={327} height={327} objectFit="cover" className={styles.ams} />
          <h4>Dutch Drugs Stories</h4>
        </div>
        <div className={styles.toSee}>
          <Image src="/images/amsterdam.jpg" width={327} height={327} objectFit="cover" className={styles.ams} />
          <h4>Dutch Drugs Stories</h4>
        </div>

      </Container>
    </div>
  )
}

export default VrijPaleisPage