import React from "react";
import Loading from "../Loading";
interface WithDataProps<DL> {
  url: string;
  onError: (error: string) => React.ReactNode;
  children: (dataLoaded: DL) => React.ReactNode;
}
interface WithDataState<DL> {
  dataLoaded?: DL;
  error?: string;
}

export default class WithData<DL> extends React.Component<WithDataProps<DL>, WithDataState<DL>> {
  state: WithDataState<DL> = {};

  async componentDidMount() {
    let json;
    try {
      const response = await fetch(this.props.url);

      json = await response.json();
    } catch (e) {
      this.setState({ dataLoaded: undefined, error: "" + e });

      return;
    }
    this.setState({ dataLoaded: json });
  }

  render() {
    if (this.state.error) {
      return this.props.onError(this.state.error);
    }

    if (!this.state.dataLoaded) {
      return <Loading />;
    }

    const renderFunction = this.props.children;

    return renderFunction(this.state.dataLoaded);
  }
}
