import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import ClientSlider from '../components/Client/ClientSlider'
import Footer from '../components/Footer/Footer'
import SearchPopup from '../components/Search/SearchPopup'
import BackToTop from '../components/BackToTop/BackToTop'
import EventSectionTop from '../components/Events/EvenSectionTop'
import EventSection from '../components/Events/EventSection'
import HeaderTop from '../components/Header/HeaderTop'
import Membership from '../components/MemberShip/Membership'
import Subscribe from '../components/Footer/Subscribe'

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