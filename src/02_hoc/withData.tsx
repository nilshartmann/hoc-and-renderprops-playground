import React from "react";
import Loading from "../Loading";

export interface WithDataProps<DL> {
  data: DL;
}

interface WithDataState<DL> {
  dataLoaded?: DL;
}

export default function withData<P, DL>(WrappedComponent: React.ComponentType<P & WithDataProps<DL>>, url: string) {
  return class WithLoading<P> extends React.Component<P, WithDataState<DL>> {
    state: WithDataState<any> = {};

    async componentDidMount() {
      const response = await fetch(url);
      const json = await response.json();

      this.setState({ dataLoaded: json });
    }

    render() {
      if (!this.state.dataLoaded) {
        return <Loading />;
      }

      return <WrappedComponent {...this.props} data={this.state.dataLoaded} />;
    }
  };
}
