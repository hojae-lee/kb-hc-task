import { useForm } from 'react-hook-form'
import { Lock, Mail } from 'lucide-react'

import Logo from '@/components/ui/Logo'
import Label from '@/components/ui/Label'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'

import useSignIn from '@/app/sign-in/hooks/useSignIn'

interface SignInFormData {
  email: string
  password: string
}

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<SignInFormData>({
    mode: 'onChange'
  })

  const { mutate, isPending } = useSignIn()

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

    // 조합 체크 (선택사항 - 혹시 조합 체크일 수도 있어서 주석으로 달아 둡니다.)
    // const hasLetter = /[a-zA-Z가-힣]/.test(value)
    // const hasNumber = /[0-9]/.test(value)
    // if (!hasLetter || !hasNumber) {
    //   return '영문(또는 한글)과 숫자를 모두 포함해야 합니다.'
    // }

    return true
  }

  const onSubmit = async (data: SignInFormData) => {
    const { email, password } = data
    mutate({ email, password })
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Logo size="xxxl" />
          <p className="mt-2 text-sm text-disabled-600">
            할 일 관리 시스템에 오신 것을 환영합니다
          </p>
        </div>

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
        </div>
      </div>
    </div>
  )
}

export default SignInPage
