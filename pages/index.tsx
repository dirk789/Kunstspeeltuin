// pages/index.tsx
import { NextPage } from 'next'
import { CSSProperties, useState } from 'react'

import { Button, Container } from './../components/atoms'
import {Slider, Card} from './../components/molecules'
import { Navigation, NewsArticle } from './../components/organisms'

import Image from 'next/image'
import Link from 'next/link'

const IndexPage = ({ launch }) => {

  return (
    <main>
      <section>
        <Navigation buttonHref="/vr-intro" bodyText="Bekijk nu een voorproefje van de installatie in 3D via jouw telefoon! Het is erg gemakkelijk en snel om dit via je telefoon te bekijken. Probeer de demo nu!">
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
                link: 'https://google.com',
                popUpContent: <p>Pickpockets is based on an eponymous album containing photographs of pickpockets who had been arrested at the 1889 World’s Fair in Paris. The artist invited writers and playwrights to compose texts from the point of view of the individuals portrayed in the album and had those texts spoken by actors.</p>
              },
              {
                name: 'Ascent',
                image: <Image src="/images/ascent.jpg" width={206} height={135} objectFit="cover" />,
                link: 'https://google.com',
                popUpContent: <p>Ascent is a reflection on this mountain that has such great significance to the Japanese, but also a study of its visual culture and a tribute to the history of both photography and film. Tan combined the images with a fictional narrative, which causes the distinction between still and moving images to shift. She thereby reveals a unique realm in which photography and film come together and interrelate. The story, resounding with the climb to the top of the mountain, alternates between narration and history, from Western imperialism to modern tourism, from the early days of photography to the present day. </p>
              },
              {
                name: "History's Future",
                image: <Image src="/images/history-future.jpg" width={206} height={135} objectFit="cover" />,
                link: 'https://google.com',
                popUpContent: <p>While Europe rushes towards an uncertain future amidst loud protests, a man loses his memory after a robbery. Confused and with nothing to hang on to, he breaks out of his helpless state by taking a drastic decision. He leaves home and sets off on a curious odyssey. Guided by confrontational, tragicomic and hopeful meetings, he struggles to get to grips with himself and the future.</p>
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

