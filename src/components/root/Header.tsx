import Logo from '@/components/common/Logo'
import Nav from '@/components/root/Nav'
import AuthNav from '@/components/root/AuthNav'

const Header = () => {
  return (
    <header className="border-b border-primary-200 bg-primary-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Nav />
            <AuthNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
