import React, { useState, useEffect } from "react";

import Ticket from "../Ticket";

import "./styles.scss";

import { data } from "../../mockedDatabase";

const VirtualizedList = ({ numItems, itemHeight, windowHeight }) => {
  const [tickets, setTickets] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);

  const innerHeight = numItems * itemHeight;

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(numItems - 1, Math.floor((scrollTop + windowHeight) / itemHeight)
  );

  useEffect(() => {
    setTickets(data);
  }, []);

  const items = [];

  if (tickets.length > 1) {
    for (let i = startIndex; i <= endIndex; i++) {
      items.push(
        <Ticket
          index={i}
          style={{
            position: "absolute",
            top: `${i * itemHeight}px`,
          }}
          data={tickets[i]}
        />
      );
    }
  }

  const onScroll = (e) => setScrollTop(e.currentTarget.scrollTop);

  return (
    <div className="scroll" onScroll={onScroll}>
      <div className="inner" style={{ height: `${innerHeight}px` }}>
        {items}
      </div>
    </div>
  );
};

export default VirtualizedList;
