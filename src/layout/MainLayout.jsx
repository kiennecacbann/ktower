import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={'min-h-screen max-w-[1920px] py-[40px] mx-auto px-14'}>
        {children}
      </main>
      <Footer />
    </>
  )
}


export default MainLayout
