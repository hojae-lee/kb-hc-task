import Logo from '@common/components/ui/Logo'

const SignInHeader = () => {
  return (
    <div className="mb-8 text-center">
      <Logo size="xxxl" />
      <p className="mt-2 text-sm text-disabled-600">
        할 일 관리 시스템에 오신 것을 환영합니다
      </p>
    </div>
  )
}

export default SignInHeader

