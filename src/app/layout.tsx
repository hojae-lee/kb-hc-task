import Header from '@app/components/Header'
import Main from '@app/components/Main'
import Footer from '@app/components/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
