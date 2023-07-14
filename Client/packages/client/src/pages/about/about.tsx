import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Hobbies from "../hobbies/Hobbies";
import PersonalInfo from "../personal-info/personal-info";

const About = () => {
  const match = useRouteMatch();
  return (
    <main>
      <ul>
        <li>
          <Link to={`${match.url}/personalinfo`}>PersonalInfo</Link>
        </li>
        <li>
          <Link to={`${match.url}/hobbies`}>Hobbies</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.url}/personalinfo`}>
          <PersonalInfo age={20} gender="male" />
        </Route>
        <Route path={`${match.url}/hobbies`}>
          <Hobbies />
        </Route>
        <Route path={`${match.url}`}>
          <h2>welcome to about page</h2>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            elementum nisi id dolor placerat porttitor. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nulla luctus efficitur enim non
            condimentum. Mauris iaculis ut nibh in aliquam. Phasellus eleifend
            ultrices arcu quis tempus. Nullam venenatis sapien nec sem sagittis,
            vitae mollis lorem tristique. Etiam eget magna a velit aliquet
            iaculis. Vestibulum facilisis id velit eget malesuada. Mauris
            elementum condimentum nunc, et luctus est convallis et. Nam et nunc
            eu sem aliquet finibus eu ac libero. Integer pharetra posuere eros,
            sed rhoncus risus tempus faucibus.
          </h5>
        </Route>
      </Switch>
    </main>
  );
};
export default About;
