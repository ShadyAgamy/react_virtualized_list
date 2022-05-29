import React, { useState } from "react";

import Ticket from "../Ticket";

import "./styles.scss";

import { data } from "../../apis";

const VirtualizedList = (props) => {
  const { numItems, itemHeight, windowHeight } = props;
  const [scrollTop, setScrollTop] = useState(0);

  const innerHeight = numItems * itemHeight;

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    numItems - 1, // don't render past the end of the list
    Math.floor((scrollTop + windowHeight) / itemHeight)
  );

  console.log({ startIndex });
  console.log({ endIndex });

  const items = [];

  for (let i = startIndex; i <= endIndex; i++) {
    items.push(
      <Ticket
        index={i}
        style={{
          position: "absolute",
          top: `${i * itemHeight}px`,
        }}
        data={data[i]}
      />
    );
  }
console.log(items)
  const onScroll = (e) => setScrollTop(e.currentTarget.scrollTop);

  return (
    <div className="scroll" style={{ overflowY: "scroll" }} onScroll={onScroll}>
      <div className="inner" style={{ position: "relative", height: `${innerHeight}px` }}>
        {items}
      </div>
    </div>
  );
};

export default VirtualizedList;
