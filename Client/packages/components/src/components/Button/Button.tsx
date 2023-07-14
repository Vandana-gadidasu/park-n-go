import React from "react";
import "./Button.scss";

export interface IButtonProps {
  className: string;
  onClick: Function;
  children: React.ReactNode;
}

const Button = ({ className, onClick, children }: IButtonProps) => (
  <div className={`btn ${className}`} onClick={(e) => onClick(e)}>
    {children}
  </div>
);

export default Button;
