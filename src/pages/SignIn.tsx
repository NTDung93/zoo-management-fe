import React from 'react'
import BackToTop from '../components/BackToTop/BackToTop'
import SearchPopup from '../components/Search/SearchPopup'
import HeaderTop from '../components/HeaderTop/HeaderTop'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Subscribe from '../components/Subscribe/Subscribe'
import Footer from '../components/Footer/Footer'
import ClientSection from '../components/Client/ClientSection'
import SignInSection from '../components/SignIn/SignInSection'

const SignIn = () => {
  return (
    <>
        <BackToTop />
        <SearchPopup />
        <HeaderTop />
        <Header />
        <Banner pageName={'Sign In'} singleName={'Sign In'} />
        <SignInSection />
        <ClientSection />
        <Subscribe />
        <Footer />
    </>
  )
}

export default SignIn