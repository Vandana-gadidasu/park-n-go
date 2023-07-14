import React from "react";

export interface IHeader {
  headerText: string;
  className: string;
}

const Header = ({ headerText, className }: IHeader) => (
  <h1 className={className}>{headerText}</h1>
);
export default Header;
