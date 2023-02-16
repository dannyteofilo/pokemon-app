import React from "react";
import {SpinnerContainer} from './style'

export interface SpinnerProps {
  size: number;
  borderWidth: number;
  color: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size, borderWidth, color }) => {
  return (
    <SpinnerContainer size={size} borderWidth={borderWidth} color={color} />
  );
};

export default Spinner;
