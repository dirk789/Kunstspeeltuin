// pages/index.tsx
import { NextPage } from 'next'
import { CSSProperties } from 'react'

import { Button, Container } from './../components/atoms'
import {Slider, Card} from './../components/molecules'
import { Navigation } from './../components/organisms'

import Image from 'next/image'
import Link from 'next/link'

const IndexPage = ({ launch }) => {
  return (
    <main>
      <section>
        <Navigation bodyText="Bekijk nu een voorproefje van de installatie in 3D via jouw telefoon! Het is erg gemakkelijk en snel om dit via je telefoon te bekijken. Probeer de demo nu!">
          Bekijk de installatie vanaf je telefoon!
        </Navigation>
      </section>
      <section>
        <Container>
          <h2 style={{marginTop: 52}}>Bekijk Fiona's werk</h2>
          <Slider 
            data={[
              {
                name: 'Pickpockets',
                image: <Image src="/images/pickpockets.jpg" width={206} height={135} objectFit="cover" />,
                link: 'https://google.com'
              },
              {
                name: 'Ascent',
                image: <Image src="/images/ascent.jpg" width={206} height={135} objectFit="cover" />,
                link: 'https://google.com'
              },
              {
                name: "History's Future",
                image: <Image src="/images/history-future.jpg" width={206} height={135} objectFit="cover" />,
                link: 'https://google.com'
              }
            ]}
          />
        </Container>
          <Card>
            <h2>Bezoek nu</h2>
            <p>Wil je dit in het echt zien?</p>
            <p>Plan dan hier je bezoek in!</p>
                <Button href="/vr-intro">Plan nu in</Button>
          </Card>
      </section>
    </main>
  )
}
export default IndexPage

