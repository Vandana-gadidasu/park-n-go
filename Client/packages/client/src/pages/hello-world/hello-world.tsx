import React, { useEffect, useState } from "react";
import img from "../../images/img.jpeg";

import instance from "../../api/api";
import "./hello-world.scss";

interface HelloWorldProps {
  name?: string;
}

const HelloWorld = ({ name }: HelloWorldProps) => {
  const [info, setinfo] = useState({});
  useEffect(() => {
    async function fetchApi() {
      const response = await instance.getWithRetries(
        `${process.env.SERVER_URL}/orange`
      );
      setinfo(response.data.message);
    }
    fetchApi();
  });
  return (
    <main className="name">
      <p>
        Hello {name} {process.env.name}
      </p>
      <h4>{JSON.stringify(info)}</h4>
      <img src={img} alt="imported in the source" />
      <img src="/balloon.jpeg" alt="from /" />
    </main>
  );
};

HelloWorld.defaultProps = {
  name: "Visitor",
};

export default HelloWorld;
