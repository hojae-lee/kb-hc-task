import SignInHeader from '@app/sign-in/components/SignInHeader'
import SignInForm from '@app/sign-in/components/SignInForm'

const SignInPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SignInHeader />
        <SignInForm />
      </div>
    </div>
  )
}

export default SignInPage
