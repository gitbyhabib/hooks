import React from "react";

import User from "./user/User";

import { Myprovider } from "./context";

const App = () => {
  return (
    <div>
      <Myprovider>
        <User />
      </Myprovider>
    </div>
  );
};

export default App;
