import BackToTop from '../components/BackToTop/BackToTop'
import ImageBottom from '../components/Bottom/ImageBottom'
import SearchPopup from '../components/Search/SearchPopup'
import SignInSection from '../components/SignIn/SignInSection'

const SignIn = () => {
  return (
    <>
        <BackToTop />
        <SearchPopup />
        <SignInSection />
        <ImageBottom />
    </>
  )
}

export default SignIn