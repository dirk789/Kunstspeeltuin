import React from 'react'

import {Number, Container, Button} from './../../components/atoms'
import {Navigation} from './../../components/organisms'

import style from './index.module.scss'

import Img from 'next/image'

const VRIntro = () => {
  return (
    <div className={style.vrIntro}>
      <Navigation withoutButton >
            Beleef Fiona's wereld in 360 graden
      </Navigation>

      <div className={style.cardboardContainer}>
          <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.98585 15.5766L8.98094 15.5888L8.97668 15.6014C8.85102 15.9705 8.47811 16.25 8 16.25H2.0375C1.47914 16.25 1 15.7771 1 15.1625V2.0875C1 1.46472 1.48697 1 2 1H23.925C24.5286 1 25 1.48086 25 2.0875V15.1625C25 15.7691 24.5286 16.25 23.925 16.25H17.9375C17.5535 16.25 17.1847 15.9977 17.0138 15.5757C17.0137 15.5755 17.0136 15.5753 17.0136 15.5751L15.2766 11.2391L15.2767 11.2391L15.2745 11.2338C14.9031 10.3363 14.0299 9.6875 13 9.6875C11.9701 9.6875 11.0969 10.3363 10.7255 11.2338L10.7255 11.2338L10.7234 11.2391L8.98585 15.5766ZM3.75 8.3625C3.75 10.1991 5.20955 11.725 7.025 11.725C8.84333 11.725 10.2875 10.1961 10.2875 8.3625C10.2875 6.48702 8.83912 5 7.025 5C5.21377 5 3.75 6.48405 3.75 8.3625ZM15.7125 8.3625C15.7125 10.1961 17.1567 11.725 18.975 11.725C20.7904 11.725 22.25 10.1991 22.25 8.3625C22.25 6.52588 20.7904 5 18.975 5C17.1567 5 15.7125 6.52887 15.7125 8.3625Z" fill="#2F433F" stroke="black"/>
          </svg>
      </div>

      <Container style={{marginTop: 32}}>
        <Number index={1}>
          <p>Zet je Google Cardboard op die je van ons hebt gekregen.</p>
        </Number>     
        <Number index={2}>
          <p>Klik op de onderstaande button.</p>
        </Number>       
        <Number index={3} customCSS={{marginBottom: 50}}>
          <p>Ben je klaar of voel je je niet goed? Zet dan je bril af en klik op het kruisje</p>
        </Number>   

        <a href="https://storage.googleapis.com/gnom-282304.appspot.com/Balloons.usdz#custom=https://kunstspeeltuin.vercel.app" rel="ar">
          <img src="/images/Button.png" width={331} height={32} />
        </a>

      </Container>

    </div>
  )
}

export default VRIntro