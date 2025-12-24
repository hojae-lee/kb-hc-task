import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Lock, Mail } from 'lucide-react'
import { AxiosError } from 'axios'

import Label from '@common/components/ui/Label'
import Input from '@common/components/ui/Input'
import Button from '@common/components/ui/Button'
import Spinner from '@common/components/ui/Spinner'
import { ErrorModal } from '@/app/sign-in/components/ErrorModal'

import useSignIn from '@app/sign-in/hooks/useSignIn'

interface SignInFormData {
  email: string
  password: string
}

const SignInForm = () => {
  const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<SignInFormData>({
    mode: 'onChange'
  })

  const handleError = (error: AxiosError) => {
    const { response } = error
    const { errorMessage: message } = (response?.data as {
      errorMessage: string
    }) || {
      errorMessage: '로그인에 실패했습니다.'
    }
    setErrorMessage(message)
    setErrorModalOpen(true)
  }

  const handleCloseModal = () => {
    setErrorModalOpen(false)
  }

  const { mutate, isPending } = useSignIn({
    onError: handleError
  })

  const validateEmail = (value: string) => {
    if (!value) {
      return '이메일을 입력해주세요.'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      return '올바른 이메일 형식이 아닙니다.'
    }
    return true
  }

  const validatePassword = (value: string) => {
    if (!value) {
      return '비밀번호를 입력해주세요.'
    }

    if (value.length < 8) {
      return '비밀번호는 8글자 이상이어야 합니다.'
    }

    if (value.length > 24) {
      return '비밀번호는 24글자 이하여야 합니다.'
    }

    // 영문, 한글, 숫자 만 허용하는 정규식
    const passwordRegex = /^[a-zA-Z가-힣0-9]+$/
    if (!passwordRegex.test(value)) {
      return '비밀번호는 영문, 한글, 숫자로만 구성되어야 합니다.'
    }

    return true
  }

  const onSubmit = async (data: SignInFormData) => {
    const { email, password } = data
    mutate({ email, password })
  }

  return (
    <div className="rounded-xl bg-white p-8 border border-primary-100">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label htmlFor="email" required>
            이메일
          </Label>
          <Input
            id="email"
            type="email"
            icon={<Mail className="h-5 w-5 text-disabled-400" />}
            placeholder="example@email.com"
            {...register('email', {
              required: true,
              validate: validateEmail
            })}
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-disabled-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="password" required>
            비밀번호
          </Label>
          <Input
            id="password"
            type="password"
            icon={<Lock className="h-5 w-5 text-disabled-400" />}
            placeholder="8-24자의 영문, 한글, 숫자"
            {...register('password', {
              required: true,
              validate: validatePassword
            })}
          />
          {errors.password && (
            <p className="mt-1.5 text-sm text-disabled-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant={isValid ? 'primary' : 'disabled'}
          fullWidth
          disabled={!isValid || isPending}
        >
          {isPending ? (
            <span className="flex items-center justify-center gap-2">
              <Spinner size="sm" />
              로그인
            </span>
          ) : (
            '로그인'
          )}
        </Button>
      </form>

      <ErrorModal
        open={errorModalOpen}
        onClose={handleCloseModal}
        errorMessage={errorMessage}
      />
    </div>
  )
}

export default SignInForm
