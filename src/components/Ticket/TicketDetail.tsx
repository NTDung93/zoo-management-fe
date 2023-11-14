import { FC } from "react";
import { TicketObj } from "../../models/ticket";
import { Grid } from "@mui/material";
import TicketCard from "./TicketCard";

interface TicketDetailProps {
  tickets: TicketObj[];
}

const TicketDetail: FC<TicketDetailProps> = ({ tickets }) => {


  return (
    <div className="col-lg-6">
      <div className="pe-xl-4">
        <div className="zoo-box">
          <h4 className="mt-0">Buy Your zoo ticket</h4>
          <p className="section__para">
          Buy your zoo ticket now! Enjoy a day filled with fascinating animal encounters, interactive exhibits, and beautiful landscapes at our zoo. 
          </p>

          <Grid container spacing={2}>
            {tickets.map((ticket) => (
              <Grid item xs={6} key={ticket.ticketId}>
                <TicketCard key={ticket.ticketId} ticket={ticket} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
