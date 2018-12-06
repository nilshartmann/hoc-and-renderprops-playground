import React from "react";
import GreetingMaster from "../GreetingMaster";
import { Greeting } from "../types";
import Loading from "../Loading";

interface GreetingProps {
  title: string;
}

interface GreetingState {
  greetings?: Greeting[];
}

export default class Greetings extends React.Component<GreetingProps, GreetingState> {
  state: GreetingState = {};

  async componentDidMount() {
    const result = await fetch("http://localhost:7000/greetingsslow");

    // WAS HIER FEHLT: FEHLERBEHANDLUNG etc

    const greetings = await result.json();

    this.setState({ greetings });
  }

  render() {
    if (!this.state.greetings) {
      return <Loading />;
    }

    return (
      <div>
        <h1>{this.props.title}</h1>
        <GreetingMaster greetings={this.state.greetings} />
      </div>
    );
  }
}
