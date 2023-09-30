import { FC } from "react";
import TicketDetail from "../components/Ticket/TicketDetail";
import Question from "../components/Ticket/Question";
import Slider from "../components/Ticket/Slider";
import Banner from "../components/Banner/Banner";
import BackToTop from "../components/BackToTop/BackToTop";
import ImageSilderBottom from "../components/Bottom/ImageSliderBottom";

interface TicketProps {}

const Ticket: FC<TicketProps> = ({}) => {
  return (
    <>
      <BackToTop />
      <Banner
        pageName={"Ticket"}
        singleName={"Ticket"}
        pictureUrl="https://res.cloudinary.com/dpysbryyk/image/upload/v1696091229/banner/bakzqfhoqbzeoxrgyrkl.jpg"
      />
      <div className="section--sm section--top">
        <div className="container">
          <div className="row g-4">
            <TicketDetail />
            <Question />
            <ImageSilderBottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
