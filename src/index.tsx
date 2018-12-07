import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Greetings from "./01_plain/Greetings";
// import Greetings from "./02_hoc/Greetings";
// import Greetings from "./03_renderprops/Greetings";
// import Greetings from "./04_renderpropsAsChildren/Greetings";
// import Greetings from "./05_renderpropsWithErrorHandling/Greetings";

class App extends React.Component {
  render() {
    return <Greetings title="Greetings" />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
