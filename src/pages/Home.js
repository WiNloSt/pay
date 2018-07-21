import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

import { Button } from '../components/Button'
import { StoreConsumer } from '../components/Store'
import { Card } from '../components/Card'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const EqualWidthContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;

  > * {
    flex: 0 0 100%;
  }

  > *:not(:first-child) {
    margin-top: ${props => props.theme.space.xl}rem;
  }
`

export default () => (
  <StoreConsumer>
    {({ authUser }) => (
      <Card style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Container>
          <EqualWidthContainer>
            <Link to="/pay">
              <Button large className="w-100">
                Pay
              </Button>
            </Link>
            {!authUser.loading && (
              <Button disabled large>
                History
              </Button>
            )}
          </EqualWidthContainer>
        </Container>
      </Card>
    )}
  </StoreConsumer>
)
