import React, { useState, useEffect } from 'react'

import { Confirm } from 'semantic-ui-react'

import { ContainerKawaiiHeader } from '@styles/general'

import PuesVivo from './AnimatedHeader'
import ModalHeaderContent from './ModalHeaderContent'
import PuesMuero from './RottenHeader'

/**
 * @returns ReactElement
 */
const KawaiiHeader: React.FC = () => {
  const [visible, setVisible] = useState(true)
  const [meMori, setMeMori] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [count, setCount] = useState(0)

  /**
   * @returns void
   */
  const closeModal = (): void => setModalOpen(false)
  /**
   * @returns void
   */
  const toggleVisible = (): void => setVisible(prevVisible => !prevVisible)

  useEffect(() => {
    window.setTimeout(toggleVisible, 350)
  }, [])

  useEffect(() => {
    if (count === 4) {
      setMeMori(true)
      setModalOpen(true)
    }
  }, [count])

  return (
    <ContainerKawaiiHeader>
      {meMori ? (
        <PuesMuero />
      ) : (
        <PuesVivo
          visible={visible}
          onClick={toggleVisible}
          onComplete={(): void => setCount(prevCount => prevCount + 1)}
        />
      )}

      <Confirm
        open={modalOpen}
        content={{ children: ModalHeaderContent }}
        onCancel={closeModal}
        onConfirm={closeModal}
        cancelButton="Ay, lo siento"
        confirmButton="OK"
        closeOnDimmerClick={false}
      />
    </ContainerKawaiiHeader>
  )
}

export default KawaiiHeader
