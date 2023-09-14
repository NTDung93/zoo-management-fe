import BackToTop from '../components/BackToTop/BackToTop'
import SearchPopup from '../components/Search/SearchPopup'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import EventDetailContent from '../components/Events/EventDetailContent'
import ClientSlider from '../components/Client/ClientSlider'
import HeaderTop from '../components/Header/HeaderTop'
import Subscribe from '../components/Footer/Subscribe'
import Header2 from '../components/Header/Header2'

const EventDetail = () => {
  return (
    <>
      <BackToTop />
      <SearchPopup />
      <HeaderTop />
      <Header2 />
      <Banner pageName={'Event Detail'} singleName={'Event Detail'} />
      <EventDetailContent />
      <ClientSlider />
      <Subscribe />
      <Footer />
    </>
  )
}

export default EventDetail