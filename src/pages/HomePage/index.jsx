import React from "react";

import NavBar from "../../components/NavBar";
import VirtualizedList from "../../components/VirtualizedList";
import { ticketLength } from "../../mockedDatabase";

import "./styles.scss";

const HomePage = () => {
  return (
    <>
      <NavBar link="/tickets/new" linkText="Create new ticket" />
      <VirtualizedList numItems={ticketLength} itemHeight={300} windowHeight={1000} />
    </>
  );
};

export default HomePage;
