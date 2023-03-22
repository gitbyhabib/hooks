import React, { Component } from "react";

const Mycontext = React.createContext();

class Myprovider extends Component {
  state = {
    users: [
      { id: 1, name: "habib" },
      { id: 2, name: "habib2" },
      { id: 3, name: "habib3" },
      { id: 4, name: "habib4" },
    ],
    active: true,
  };

  toggleActive = () => {
    this.setState({ active: !this.state.active });
  };
  render() {
    return (
      <Mycontext.Provider
        value={{
          users: this.state.users,
          active: this.state.active,
          toggleActive: this.toggleActive,
        }}
      >
        {this.props.children}
      </Mycontext.Provider>
    );
  }
}
export { Mycontext, Myprovider };
