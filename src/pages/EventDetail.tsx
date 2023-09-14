import BackToTop from '../components/BackToTop/BackToTop'
import SearchPopup from '../components/Search/SearchPopup'
import EventDetailContent from '../components/Events/EventDetailContent'
import ImageSilderBottom from '../components/Bottom/ImageSliderBottom'
import Banner from '../components/Banner/Banner'

const EventDetail = () => {
  return (
    <>
      <Banner pageName={'Event detail'} singleName={'Event detail'} />
      <BackToTop />
      <SearchPopup />
      <EventDetailContent />
      <ImageSilderBottom />
    </>
  )
}

export default EventDetail