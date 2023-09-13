import React from 'react'
import BackToTop from '../components/BackToTop/BackToTop'
import SearchPopup from '../components/Search/SearchPopup'
import HeaderTop from '../components/HeaderTop/HeaderTop'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Subscribe from '../components/Subscribe/Subscribe'
import Footer from '../components/Footer/Footer'
import EventDetailContent from '../components/Events/EventDetailContent'
import ClientSlider from '../components/Client/ClientSlider'

const EventDetail = () => {
  return (
    <>
    <BackToTop />
    <SearchPopup />
    <HeaderTop />
    <Header />
    <Banner pageName={'Event Detail'} singleName={'Event Detail'} />
    <EventDetailContent />
    <ClientSlider />
    <Subscribe />
    <Footer />
    </>
  )
}

export default EventDetail