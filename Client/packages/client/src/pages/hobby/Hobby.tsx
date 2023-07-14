import React from "react";
import { useParams } from "react-router-dom";

interface IHobbyProps {
  hobbies: string[];
}

type ParamTypes = {
  hobbyId: string;
};

const Hobby = ({ hobbies }: IHobbyProps) => {
  const { hobbyId } = useParams<ParamTypes>();
  const hobby = hobbies[Number(hobbyId)];
  return <h3>{hobby}</h3>;
};

export default Hobby;
