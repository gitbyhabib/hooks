import React, { useContext } from "react";

import { Mycontext } from "../context";

const Useritem = () => {
  const context = useContext(Mycontext);

  return (
    <div>
      {context.active
        ? context.users.map((item) => (
            <div key={item.id}>
              <div>Name:{item.name}</div>
            </div>
          ))
        : null}

      <hr />

      <button onClick={context.toggleActive}>Toggle It</button>
    </div>
  );
};

export default Useritem;
