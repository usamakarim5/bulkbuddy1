import React, { useState } from "react";
import Navbar from "../basic-components/Navbar/Navbar";
import Topbar from "../basic-components/Navbar/Topbar";
import MobilesMain from "./components/MobilesMain";

import FilterComponent from "../basic-components/filter/Filter";

const Mobiles = () => {
  
  var sectionName = "Mobile Phones"

  return (
    <>
      <Navbar sectionName = {sectionName}/>
        <Topbar />
      <div className="container-fluid mobiles_cont">
       <FilterComponent/>
        <MobilesMain />
      </div>
    </>
  );
};

export default Mobiles;
