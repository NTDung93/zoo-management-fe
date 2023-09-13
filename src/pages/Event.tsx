import React from 'react'
import HeaderTop from '../components/HeaderTop/HeaderTop'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Membership from '../components/Membership/Membership'
import ClientSlider from '../components/Client/ClientSlider'
import Subscribe from '../components/Subscribe/Subscribe'
import Footer from '../components/Footer/Footer'
import SearchPopup from '../components/Search/SearchPopup'
import BackToTop from '../components/BackToTop/BackToTop'
import EventSectionTop from '../components/Events/EvenSectionTop'
import EventSection from '../components/Events/EventSection'

const Event = () => {
  return (
    <>
        <BackToTop />
        <SearchPopup />
        <HeaderTop />
        <Header />
        <Banner pageName={'Event'} singleName={'Event'} />
        <EventSectionTop />
        <EventSection />
        <Membership />
        <ClientSlider />
        <Subscribe />
        <Footer />
    </>

  )
}

export default Event