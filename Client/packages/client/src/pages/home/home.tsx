import { useDispatch, useSelector } from "react-redux";
import { Button, Header, Accordion, Carousel } from "components";

import {
  counterIncrement,
  counterDecrement,
  counterReset,
} from "../../redux/Counter/counter.middleware";
import { IState } from "../../redux/rootReducer";
import imageOne from "../../images/carousel/alessandro-carrarini-YKa1kxa9YQo-unsplash.jpg";
import imageTwo from "../../images/carousel/enrica-tancioni-kvpRkt9E1D4-unsplash.jpg";
import imageThree from "../../images/carousel/kevin-bessat-U3k1zKLcyCc-unsplash.jpg";
import imageFour from "../../images/carousel/massimiliano-morosinotto-lUuUQo4PFV8-unsplash.jpg";

import "./home.scss";

const accordionData = [
  {
    title: "section 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "section 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "section 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const ImageData = [
  {
    image: imageOne,
  },
  {
    image: imageTwo,
  },
  {
    image: imageThree,
  },
  {
    image: imageFour,
  },
];

const Home = () => {
  const { count } = useSelector((state: IState) => state.counter);
  const dispatch = useDispatch();

  return (
    <main className="home-page">
      <Header className="home-header" headerText="Welcome to my Home Page" />
      <div className="counter">
        <div className="counter-label"> Count: {count}</div>
        <div className="counter-btn-container">
          <Button
            className="primary increment"
            onClick={() => dispatch(counterIncrement())}
          >
            Increase Count
          </Button>

          <Button
            className="primary decrement"
            onClick={() => dispatch(counterDecrement())}
          >
            Decrease Count
          </Button>

          <Button
            className="secondary reset"
            onClick={() => dispatch(counterReset())}
          >
            Reset
          </Button>
        </div>
      </div>
      <h2>Example application</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        {accordionData.map(({ title, content }) => (
          <Accordion
            key={`accordion-key-${title.split("").join()}`}
            className="accordion"
            title={title}
            content={content}
          />
        ))}
      </div>

      <div>
        <Carousel className="carousel" data={ImageData} />
      </div>
    </main>
  );
};

export default Home;
