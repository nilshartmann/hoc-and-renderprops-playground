import React from "react";
import "./App.css";
import Greetings from "./01_plain/Greetings";
// import Greetings from "./02_hoc/Greetings";
// import Greetings from "./03_renderprops/Greetings";
// import Greetings from "./04_renderpropsAsChildren/Greetings";

export default class App extends React.Component {
  render() {
    return <Greetings title="Greetings" />;
  }
}
