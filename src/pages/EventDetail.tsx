import BackToTop from '../components/BackToTop/BackToTop'
import SearchPopup from '../components/Search/SearchPopup'
import EventDetailContent from '../components/Events/EventDetailContent'
import ImageSilderBottom from '../components/Bottom/ImageSliderBottom'

const EventDetail = () => {
  return (
    <>
      <BackToTop />
      <SearchPopup />
      <EventDetailContent />
      <ImageSilderBottom />
    </>
  )
}

export default EventDetail