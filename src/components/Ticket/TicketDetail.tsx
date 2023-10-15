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
            Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.
            Vestibulum volutpat pretium libero. Cras id dui.
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
