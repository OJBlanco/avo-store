import React from 'react'

import Link from 'next/link'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

import { Colophon, ColophonEntry } from '@styles/general'

/**
 * @returns ReactElement
 */
const Footer = (): React.ReactElement => (
  <Segment
    vertical
    as="footer"
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="Nosotros" />
            <List>
              <List.Item>
                <Link href="/about">
                  <a>Conoce más</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Servicios" />
            <List>
              <List.Item>
                <Link href="/">
                  <a>Todos los productos</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Hecho para</Header>
            <p>
              <a href="https://platzi.com/">Platzi y su curso de Next.JS</a> de
              Platzi dictado por{' '}
              <a href="https://twitter.com/jonalvarezz">@jonalvarezz</a>
            </p>
            <List horizontal style={{ display: 'flex' }}>
              <List.Item
                icon="twitter"
                style={{ display: 'flex' }}
                content={<a href="https://twitter.com/jonalvarezz">Twitter</a>}
              />
              <List.Item
                icon="github"
                style={{ display: 'flex' }}
                content={
                  <a href="https://github.com/jonalvarezz/platzi-nextjs">
                    GitHub
                  </a>
                }
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Colophon>
        <ColophonEntry>
          Icons made by{' '}
          <a
            target="_blank"
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
            rel="noreferrer"
          >
            Freepik
          </a>
          {' from '}
          <a
            target="_blank"
            href="https://www.flaticon.com/"
            title="Flaticon"
            rel="noreferrer"
          >
            www.flaticon.com
          </a>
        </ColophonEntry>
        <ColophonEntry>
          Avocado images taken from{' '}
          <a
            className="acnor"
            target="_blank"
            href="https://www.californiaavocado.com/avocado101/avocado-varieties"
            title="California Avocado"
            rel="noreferrer"
          >
            Avocado 101
          </a>
          {' at '}
          <a
            target="_blank"
            href="https://www.californiaavocado.com"
            title="Flaticon"
            rel="noreferrer"
          >
            California Avocado
          </a>
        </ColophonEntry>
      </Colophon>
    </Container>
  </Segment>
)

export default Footer
