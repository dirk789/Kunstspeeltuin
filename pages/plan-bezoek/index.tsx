import React from 'react'

import {Navigation} from './../../components/organisms'
import {Button, Container} from './../../components/atoms'


import styles from './index.module.scss'

const PlanBezoekPage = () => {
  return (
    <div className={styles.planBezoek}>
      <Navigation withoutButton>Plan uw bezoek</Navigation>
      <Container>
        <p style={{marginTop: 24}}>
        Het Vrijpaleis verwelkomt uw zeer graag om in het echt deze installatie en de wereld van Fiona Tan te ontdekken. Vul hieronder uw gegevens in en betaal gemakkelijk online.
        </p>
        <h2 style={{marginTop: 32, marginBottom: 8}}>Uw gegevens</h2>
        <form>
          <label htmlFor="name">Naam:
            <input type="text" name="name" id="name" minLength={4} />
          </label>
          <label htmlFor="email">Email:
            <input type="email" name="email" id="email" minLength={4} />
          </label>
          <label htmlFor="woonplaats">Woonplaats:
            <input type="text" name="woonplaats" id="woonplaats" minLength={4} />
          </label>
          <label htmlFor="postcode">Postcode:
            <input type="number" name="postcode" id="postcode" className={styles.postcode} minLength={4} />
          </label>
        </form>
        <Button isBlock href="/payment">Ga door</Button>
      </Container>
    </div>
  )
}

export default PlanBezoekPage