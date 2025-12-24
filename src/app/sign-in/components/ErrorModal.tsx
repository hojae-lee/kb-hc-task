import { Modal } from '@common/components/ui/Modal'
import Button from '@common/components/ui/Button'

type ErrorModalProps = {
  open: boolean
  onClose: () => void
  errorMessage: string
}

export const ErrorModal = ({
  open,
  onClose,
  errorMessage
}: ErrorModalProps) => {
  return (
    <Modal open={open} onClose={onClose} title="오류">
      <div className="flex flex-col gap-4">
        <p className="text-disabled-700">{errorMessage}</p>
        <div className="flex justify-end">
          <Button onClick={onClose} variant="primary">
            확인
          </Button>
        </div>
      </div>
    </Modal>
  )
}
