import { FC, ReactElement, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { CrossIcon } from '@/components'

interface IModal {
  title?: string
  showModal: boolean
  children: ReactElement | ReactElement[]
  onClose?: () => void
}

const ModalWrapper: FC<IModal> = ({ title, children, showModal, onClose }) => {
  return showModal ? (
    <div className="absolute left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-black/40 backdrop-blur">
      {onClose ? (
        <div className="absolute z-0 h-full w-full" onClick={onClose} />
      ) : null}
      <div className="z-50 flex h-fit max-h-lg min-h-md w-md animate-float-zoom flex-col rounded-5 bg-white p-5">
        {title && (
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium text-black/90">{title}</h2>
            {onClose ? (
              <div
                className="flex cursor-pointer overflow-hidden rounded-full p-2 text-black/90 opacity-40 transition-all duration-300 ease-in-out hover:bg-black/5 hover:opacity-100"
                onClick={onClose}
              >
                <CrossIcon />
              </div>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </div>
  ) : (
    <div />
  )
}

const Modal: FC<IModal> = ({ title, children, showModal, onClose }) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (isBrowser) {
    return createPortal(
      <ModalWrapper title={title} showModal={showModal} onClose={onClose}>
        {children}
      </ModalWrapper>,
      document.getElementById('modal-root') as Element
    )
  }

  return null
}

export default Modal
