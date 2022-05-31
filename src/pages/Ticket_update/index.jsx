import React, {useState, useEffect} from 'react';
import NavBar from "../../components/NavBar";
import TicketForm from "../../components/Ticket_form";

import {useParams, useHistory} from "react-router-dom";

import {getSingleTicket, updateTicket} from "../../mockedDatabase";

function UpdateTicket() {
  const history = useHistory();
  const [ticket, setTicket] = useState({})
  const {id} = useParams();
  useEffect(() => {
    setTicket(getSingleTicket(id));
  }, [id])
  const formSubmit = newValues => {
    updateTicket(id, newValues);
    history.push("/");
}
  return (
    <>
    <NavBar link={"/"} linkText="All tickets" />
    <TicketForm onSubmit={formSubmit} initialValues={ticket}/>
    </>
    
  )
}

export default UpdateTicket




