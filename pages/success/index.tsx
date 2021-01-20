import React from 'react'

import styles from './index.module.scss'

import {Container, Button} from './../../components/atoms'

const SuccessPage = () => {
  return (
    <div className={styles.success}>
      <Container>
      <h1>Success!</h1>
      <p>We kijken er naar uit om u op <strong>21 februari 2021</strong> te zien.</p>
      <Button isBlock href="/">Ga terug</Button>
      </Container>
    </div>
  )
}

export default SuccessPage