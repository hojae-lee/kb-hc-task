import { useQueryClient } from '@tanstack/react-query'

import { Modal } from '@common/components/ui/Modal'
import Button from '@common/components/ui/Button'

import { taskKeys } from '@api/task'

type ErrorModalProps = {
  open: boolean
  onClose: () => void
  errorMessage: string
}

const ErrorModal = ({ open, onClose, errorMessage }: ErrorModalProps) => {
  const queryClient = useQueryClient()

  const handleRedirect = () => {
    queryClient.resetQueries({ queryKey: taskKeys.list() })
    window.location.reload()
  }

  return (
    <Modal open={open} onClose={onClose} title="오류 발생">
      <div className="flex flex-col gap-4">
        <p className="text-disabled-700">{errorMessage}</p>
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="primary">
            닫기
          </Button>
          <Button onClick={handleRedirect} variant="primary">
            목록으로
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ErrorModal
