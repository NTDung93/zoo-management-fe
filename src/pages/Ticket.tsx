import { FC } from "react";
import TicketDetail from "../components/Ticket/TicketDetail";
import Question from "../components/Ticket/Question";
import UpcomingEvent from "../components/Ticket/UpcomingEvent";
import Slider from "../components/Ticket/Slider";

interface TicketProps {}

const Ticket: FC<TicketProps> = ({}) => {
  return (
    <>
      <div className="section--sm section--top">
        <div className="container">
          <div className="row g-4">
            <TicketDetail />
            <Question />
            <UpcomingEvent />
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
