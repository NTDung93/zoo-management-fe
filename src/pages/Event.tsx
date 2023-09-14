import SearchPopup from '../components/Search/SearchPopup'
import BackToTop from '../components/BackToTop/BackToTop'
import EventSectionTop from '../components/Events/EvenSectionTop'
import EventSection from '../components/Events/EventSection'
import ImageSilderBottom from '../components/Bottom/ImageSliderBottom'

const Event = () => {
  return (
    <>
        <BackToTop />
        <SearchPopup />
        <EventSectionTop />
        <EventSection />
        <ImageSilderBottom />
    </>

  )
}

export default Event