import { FC, useEffect, useState } from "react";
import TicketDetail from "../components/Ticket/TicketDetail";
import Question from "../components/Ticket/Question";
import Banner from "../components/Banner/Banner";
import BackToTop from "../components/BackToTop/BackToTop";
import ImageSilderBottom from "../components/Bottom/ImageSliderBottom";
import { TicketObj } from './../models/ticket';
import agent from "../api/agent";

interface TicketProps {}

const Ticket: FC<TicketProps> = ({}) => {
  const [tickets, setTickets] = useState<TicketObj[]>([]);

  useEffect(() => {
    agent.Tickets.list()
      .then((tickets) => setTickets(tickets))
      .catch((error) => console.log(error));
  }, []); 

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
            <TicketDetail tickets={tickets} />
            <Question />
            <ImageSilderBottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
