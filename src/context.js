import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Enkay Osomo",
        email: "enkay@peter.com",
        phone: "888-990-321-3"
      },
      {
        id: 2,
        name: "Bruce Wayne",
        email: "BruceWayne@corp.com",
        phone: "444-444-222-1"
      },
      {
        id: 3,
        name: "Linda Luthor",
        email: "Linda@luthorcorp.com",
        phone: "555-555-344-2"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
