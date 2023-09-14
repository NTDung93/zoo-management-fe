import BackToTop from '../components/BackToTop/BackToTop'
import SearchPopup from '../components/Search/SearchPopup'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import ClientSection from '../components/Client/ClientSection'
import SignInSection from '../components/SignIn/SignInSection'
import HeaderTop from '../components/Header/HeaderTop'
import Subscribe from '../components/Footer/Subscribe'

const SignIn = () => {
  return (
    <>
      <BackToTop />
      <SearchPopup />
      <HeaderTop />
      <Banner pageName={'Sign In'} singleName={'Sign In'} />
      <SignInSection />
      <ClientSection />
      <Subscribe />
      <Footer />
    </>
  )
}

export default SignIn