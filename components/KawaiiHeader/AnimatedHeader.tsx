import React from 'react'

import { Header, Transition } from 'semantic-ui-react'

import Avocado from '@icons/Avocado'

type AnimatedHeaderProps = {
  visible: boolean
  onClick: () => void
  onComplete: () => void
}

/**
 * @param props AnimatedHeaderProps
 * @param props.visible boolean
 * @param props.onClick () => void
 * @param props.onComplete () => void
 * @returns ReactElement
 */
const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
  visible,
  onClick,
  onComplete,
}: AnimatedHeaderProps) => (
  <Header size="huge" as="h1" onClick={onClick}>
    Platzi
    <Transition
      animation="jiggle"
      visible={visible}
      duration={900}
      onComplete={onComplete}
    >
      <Avocado size="58px" />
    </Transition>
    Avo
  </Header>
)

export default AnimatedHeader
