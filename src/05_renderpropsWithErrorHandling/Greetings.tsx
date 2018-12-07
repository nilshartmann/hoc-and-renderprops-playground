import React from "react";

import WithData from "./WithData";
import GreetingMaster from "../GreetingMaster";

import { Greeting } from "../types";
interface GreetingProps {
  title: string;
}

export default function Greetings({ title }: GreetingProps) {
  return (
    <WithData<Greeting[]> url="http://localhost:7000/greetingsslow" onError={e => <h3>Could not load greetings: {e}</h3>}>
      {data => {
        return (
          <div>
            <h1>{title}</h1>
            <GreetingMaster greetings={data} />
          </div>
        );
      }}
    </WithData>
  );
}
