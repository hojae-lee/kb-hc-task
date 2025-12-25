import { useState } from 'react'
import { useNavigate } from 'react-router'

import { Modal } from '@common/components/ui/Modal'
import Button from '@common/components/ui/Button'
import Input from '@common/components/ui/Input'
import Label from '@common/components/ui/Label'

type DeleteModalProps = {
  open: boolean
  onClose: () => void
  taskId: string
}

const DeleteModal = ({ open, onClose, taskId }: DeleteModalProps) => {
  const navigate = useNavigate()
  const [inputId, setInputId] = useState('')
  const isValid = inputId === taskId

  const handleSubmit = () => {
    if (isValid) {
      navigate('/task')
    }
  }

  const handleClose = () => {
    setInputId('')
    onClose()
  }

  return (
    <Modal open={open} onClose={handleClose} title="삭제 확인">
      <div className="flex flex-col gap-4">
        <p className="text-disabled-700">
          할 일을 삭제하려면 아래 입력란에 할 일 ID를 입력해주세요.
        </p>
        <div>
          <Label htmlFor="delete-id" required>
            할 일 ID
          </Label>
          <Input
            id="delete-id"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            placeholder={taskId}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={handleClose} variant="basic">
            취소
          </Button>
          <Button
            onClick={handleSubmit}
            variant={isValid ? 'primary' : 'disabled'}
            disabled={!isValid}
          >
            제출
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteModal
