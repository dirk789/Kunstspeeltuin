import React, { useState } from 'react'

import AudioPlayer from 'react-h5-audio-player';

import {Container, Button} from './../../components/atoms'
import {Navigation} from './../../components/organisms'
import {Card} from './../../components/molecules'

import Image from 'next/image'

import style from './index.module.scss'

const Audio = () => {

  const [isPlaying, setIsPlaying] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  return (
    <div className={style.audio}>
      <Navigation withoutButton bodyText="Luister hier een fragment over Fiona’s jeugd">
      Fiona's verhaal
      </Navigation>

      <Container style={{marginTop: 32, overflowX: 'hidden'}}>

        <div className={style.foto} data-is-playing={isPlaying || undefined}>
          <Image src="/images/fiona.jpg" width={210} height={210} />
        </div>
       
        <AudioPlayer
          src="/story.mp3"
          showJumpControls={false}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsFinished(true)}
        />

        {isFinished && 
        <Card>
          <h2>Meer luisteren?</h2>
          <p>Is het Vrijpaleis kunt u dit volledige verhaal beluisteren en nog veel meer!</p>
          <p>Maak via de onderstaande knop een afsraak!</p>
        </Card>
          }


        <Button href="" isBlock>Ga door</Button>

      </Container>

    </div>
  )
}

export default Audio