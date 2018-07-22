import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import CreditCardInput from 'react-credit-card-input'
import styled from 'styled-components'

const Center = styled.div`
  text-align: center;
`

export const CreditCardForm = props => (
  <Center {...props}>
    <Cards number="4242424242" name="customer name" expiry="10/20" cvc="123" focused="" />
    <CreditCardInput
      containerClassName="mt3"
      fieldStyle={{ border: '1px solid #ccc' }}
      cardNumberInputProps={{ value: null, onChange: () => {} }}
      cardExpiryInputProps={{ value: null, onChange: () => {} }}
      cardCVCInputProps={{ value: null, onChange: () => {} }}
    />
  </Center>
)
