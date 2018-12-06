import React from "react";
import Loading from "../Loading";
interface WithDataProps<DL> {
  url: string;
  onResult: (dataLoaded: DL) => React.ReactNode;
}
interface WithDataState<DL> {
  dataLoaded?: DL;
}

export default class WithData<DL> extends React.Component<
  WithDataProps<DL>,
  WithDataState<DL>
> {
  state: WithDataState<DL> = {};

  async componentDidMount() {
    const response = await fetch(this.props.url);
    const json = await response.json();

    this.setState({ dataLoaded: json });
  }

  render() {
    if (!this.state.dataLoaded) {
      return <Loading />;
    }

    const renderFunction = this.props.onResult;

    return renderFunction(this.state.dataLoaded);
  }
}
