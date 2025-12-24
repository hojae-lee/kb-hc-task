import Header from '@/components/root/Header'
import Main from '@/components/root/Main'
import Footer from '@/components/root/Footer'

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
