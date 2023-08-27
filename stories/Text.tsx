import React from "react";

interface TextProps {
  text: string;
}

/**
 * Primary UI component for user interaction
 */
export const Text = ({ text }: TextProps) => {
  return <p className="text-red-500 border-solid">{text}</p>;
};
