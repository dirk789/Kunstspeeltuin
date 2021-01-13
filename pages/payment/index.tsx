import React from 'react'

import {Navigation} from './../../components/organisms'
import {Button, Container} from './../../components/atoms'


import styles from './index.module.scss'

const PaymentPage = () => {
  const fakeWarning = () => alert('This is not a real form. No data will be sent to the server. Do not enter your details.')
  return (
    <div className={styles.payment}>
      <Navigation withoutButton>Afronding</Navigation>
      <Container>
        <h2 style={{marginTop: 32, marginBottom: 8}}>Samenvatting</h2>
        <div className={styles.gridData}>
            <div>Bezoekdatum:</div>
            <div>20 Februari 2020</div>
            <div>Aantal personen</div>
            <div>2 personen</div>
            <div>Prijs</div>
            <div>$20</div>
            <div>Totaal</div>
            <div>$40</div>
        </div>
        <h2>Betaling</h2>
        <form>
          <label htmlFor="name">Naam:
            <input type="text" name="name" id="name" minLength={4} onClick={fakeWarning} />
          </label>
          <label htmlFor="email">Credit card number:
            <input type="email" name="email" id="email" minLength={4} onClick={fakeWarning} disabled />
          </label>
          <div className={styles.formColumns}>
            <label htmlFor="woonplaats">CVV:
              <input disabled type="text" name="woonplaats" id="woonplaats" minLength={4} onClick={fakeWarning} />
            </label>
            <label htmlFor="postcode">Vervaldatum:
              <input disabled type="number" name="postcode" id="postcode" className={styles.postcode} minLength={4} onClick={fakeWarning} />
            </label>
          </div>
        </form>
        <Button isBlock href="/success">Bevestig</Button>
      </Container>
    </div>
  )
}

export default PaymentPage