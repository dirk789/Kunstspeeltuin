// pages/index.tsx
import { NextPage } from 'next'
import { CSSProperties } from 'react'

import { Button, Container } from './../components/atoms'
import {Slider} from './../components/molecules'
import { Navigation } from './../components/organisms'

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
                image: <img src="//unsplash.it/500" />,
                link: 'https://google.com'
              },
              {
                name: 'Pickpockets',
                image: <img src="//unsplash.it/500" />,
                link: 'https://google.com'
              }
            ]}
          />
        </Container>
      </section>
    </main>
  )
}
export default IndexPage

