import React from "react";
import { formatDollar } from "../utils";

const App = () => {
  return (
    <div>
      {formatDollar('1000')}
    </div>
  );
};

export default App;
