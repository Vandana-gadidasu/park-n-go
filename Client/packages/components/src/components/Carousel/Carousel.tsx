import React, { useState } from "react";
import "./Carousel.scss";

export interface ICarouselProps {
  className: string;
  data: {
    image: string;
  }[];
}

const Carousel = ({ className, data }: ICarouselProps) => {
  const [current, setCurrent] = useState(0);
  const { length } = data;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div>
      {data.map((image, index) => (
        <div key={`${current + index}`}>
          {index === current && (
            <div>
              <div className={`${className}`}>
                <div className={`${className}-image`}>
                  <img
                    src={image.image}
                    style={{ width: "100%", height: 400 }}
                    alt=""
                    id={`image-${index + 1}`}
                  />
                </div>

                <div className={`${className}-controls`}>
                  <div className="circle" onClick={prevSlide}>
                    <div className="text">prev</div>
                  </div>
                  <div className="circle" onClick={nextSlide}>
                    <div className="text">next</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Carousel;
