import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import Hobby from "../hobby/Hobby";

const Hobbies = () => {
  const hobbies = ["Watching movies", "Reading books"];
  const match = useRouteMatch();
  const listItems = hobbies.map((hobby, index) => {
    const linkValue = `hobby-${index + 1}`;
    return (
      <li key={linkValue}>
        <Link to={`${match.url}/${index}`}>{linkValue}</Link>
      </li>
    );
  });

  return (
    <div>
      <ul>{listItems}</ul>
      <Switch>
        <Route path={`${match.url}/:hobbyId`}>
          <Hobby hobbies={hobbies} />
        </Route>
      </Switch>
    </div>
  );
};
export default Hobbies;
