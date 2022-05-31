import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar";
import TicketForm from "../../components/Ticket_form";
import { Container } from "react-bootstrap";

import {addNewTicket} from "../../mockedDatabase/index";

function CreateTicket() {
  const history = useHistory();
    const formSubmit = async newTicket => {
      addNewTicket(newTicket);
      history.push("/");
    }

  return (
    <>
      <NavBar link={"/"} linkText="All tickets" />
      <Container className="mt-5">
        <h2 className="h2 mb-4"> Create new ticket</h2>
        <TicketForm onSubmit={formSubmit}/>
      </Container>
    </>
  );
}

export default CreateTicket;
