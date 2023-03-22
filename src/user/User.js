import React, { Component } from "react";
import Useritem from "./Useritem";

import { Mycontext } from "../context";
class User extends Component {
  //static contextType = Mycontext;

  render() {
    //console.log(this.context);
    return (
      <div>
        <Mycontext.Consumer>
          {(context) => {
            console.log(context);
          }}
        </Mycontext.Consumer>
        <Useritem />
      </div>
    );
  }
}

export default User;
