import React from 'react'

import {Number, Container, Button} from './../../components/atoms'
import {Navigation} from './../../components/organisms'

import style from './index.module.scss'

const Telefoongesprek = () => {
  return (
    <div className={style.telefoongesprek}>
      <Navigation withoutButton >
      Telefoongesprek met Fiona
      </Navigation>

      <Container style={{marginTop: 32}}>
        <Number index={1}>
          <p>Zet je geluid aan en draag een koptelefoon voor de beste ervaring</p>
        </Number>     
        <Number index={2}>
          <p>Denk na over de vraag die je het liefst zou willen stellen</p>
        </Number>       
        <Number index={3} customCSS={{marginBottom: 50}}>
          <p>Schrijf je in voor de tentoonstelling voor de volledige 3D evaring!</p>
        </Number>   

        <Button isBlock>Ga door</Button>

      </Container>

    </div>
  )
}

export default Telefoongesprek