import React, { useEffect } from "react";

import VirtualizedList from "../../components/VirtualizedList";



import "./styles.scss";

const HomePage = () => {


  return (
    <>
   <VirtualizedList numItems={1000} itemHeight={200} windowHeight={1000}/>
    </>
  );
};

export default HomePage;
