import React from "react";

import withData, { WithDataProps } from "./withData";
import GreetingMaster from "../GreetingMaster";

import { Greeting } from "../types";

interface GreetingProps extends WithDataProps<Greeting[]> {
  title: string;
}

function Greetings({ title, data }: GreetingProps) {
  return (
    <div>
      <h1>{title}</h1>
      <GreetingMaster greetings={data} />
    </div>
  );
}

export default withData<GreetingProps, Greeting[]>(Greetings, "http://localhost:7000/greetingsslow");
