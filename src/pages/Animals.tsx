import AnimalGallery from '../components/Animals/AnimalGallery'
import ClientSectionSlider from '../components/Animals/ClientSectionSlider'
import EventSection from '../components/Animals/EventSection'
import MembershipSection from '../components/Animals/MembershipSection'
import SubscribeSection from '../components/Animals/SubscribeSection'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header2 from '../components/Header/Header2'
import BackToTop from '../components/Home/BackToTop'
import FactSection from '../components/Home/FactSection'
import FAQSection from '../components/Home/FaqSection'

const Animals = () => {
  return (
	<>
	<Header2/>
	<BackToTop/>
	<Banner/>
	<AnimalGallery/>
	<EventSection/>
	<FAQSection/>
	<FactSection/>
	<MembershipSection/>
	<ClientSectionSlider/>
	<SubscribeSection/>
	<Footer/>
	</>
  )
}

export default Animals