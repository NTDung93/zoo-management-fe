import SearchPopup from '../components/Search/SearchPopup'
import BackToTop from '../components/BackToTop/BackToTop'
import EventSectionTop from '../components/Events/EvenSectionTop'
import EventSection from '../components/Events/EventSection'
import ImageSilderBottom from '../components/Bottom/ImageSliderBottom'
import Banner from '../components/Banner/Banner'

const Event = () => {
  return (
    <>
      <Banner pageName={'Events'} singleName={'Events'} />
      <BackToTop />
      <SearchPopup />
      <EventSectionTop />
      <EventSection />
      <ImageSilderBottom />
    </>

  )
}

export default Event