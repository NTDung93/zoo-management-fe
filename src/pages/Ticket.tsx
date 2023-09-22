import { FC } from "react";
import TicketDetail from "../components/Ticket/TicketDetail";
import Question from "../components/Ticket/Question";
import Slider from "../components/Ticket/Slider";
import Banner from "../components/Banner/Banner";
import BackToTop from "../components/BackToTop/BackToTop";

interface TicketProps {}

const Ticket: FC<TicketProps> = ({}) => {
  return (
    <>
      <BackToTop />
      <Banner pageName={"Ticket"} singleName={"Ticket"} />
      <div className="section--sm section--top">
        <div className="container">
          <div className="row g-4">
            <TicketDetail />
            <Question />
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
