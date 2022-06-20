import React from 'react'

import { Header } from 'semantic-ui-react'

import PosMeMuero from '@icons/PosMeMuero'

/**
 * @returns ReactElement
 */
const RottenHeader = (): React.ReactElement => (
  <Header size="huge" as="h1">
    Platzi
    <PosMeMuero size="58px" />
    Avo
  </Header>
)

export default RottenHeader
