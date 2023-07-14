import React, { useState } from "react";
import "./Accordion.scss";

export interface IAccordionProps {
  className: string;
  title: string;
  content: string;
}

const Accordion = ({ className, title, content }: IAccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${className}`}>
      <div className={`${className}-item`}>
        <div
          className={`${className}-title`}
          onClick={() => setIsActive(!isActive)}
        >
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className={`${className}-content`}>{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
