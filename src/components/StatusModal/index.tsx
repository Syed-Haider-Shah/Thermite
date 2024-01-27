import { forwardRef } from 'react'

forwardRef

type Props = {
  toggleDialog: () => void
  statusClose: () => void
}

const StatusModal = forwardRef<HTMLDialogElement, Props>(
  ({ toggleDialog, statusClose }, ref) => {
    return (
      <dialog
        ref={ref}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            toggleDialog()
          }
        }}
      >
        <div className="flex flex-col items-center justify-center gap-5 rounded border-2 p-8">
          <div>Would you like to close the ticket?</div>
          <div className="flex gap-4">
            <button
              className="rounded-5 bg-darkIndigo p-4 px-8 text-white shadow-md transition hover:bg-gradient-to-tr hover:from-darkIndigo hover:to-loadBlue"
              onClick={() => {
                statusClose()
                toggleDialog()
              }}
            >
              YES
            </button>
            <button
              className="rounded-5 bg-darkIndigo p-4 px-8 text-white shadow-md transition-all hover:bg-gradient-to-tr hover:from-darkIndigo hover:to-loadBlue"
              onClick={toggleDialog}
            >
              NO
            </button>
          </div>
        </div>
      </dialog>
    )
  }
)
export default StatusModal
