import React from "react";
import Headerr from "./components/Headerr";
import Contentt from "./components/Contentt";
import Footerr from "./components/Footerr";
import MainRoute from "./MainRoute";
const App = () => {
  return (
    <div>
      <Headerr />
      {/* <Contentt /> */}
      <MainRoute />
      <Footerr />
    </div>
  );
};

export default App;
