"use client";
import { useRef, useState } from "react";
import useAutoResizeTextArea from "./useAutoResizeTextArea";

interface AutoResizeTextAreaProps {
  id: string;
  placeholder?: string;
}

const AutoResizeTextArea: React.FC<AutoResizeTextAreaProps> = ({
  id,
  placeholder = "何があった？",
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState("");

  useAutoResizeTextArea(textAreaRef.current, value);

  return (
    <textarea
      id={id}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      ref={textAreaRef}
      rows={1}
      value={value}
      className="mb-2 border-2 p-2 pb-5 rounded-lg focus:ring-0 w-full resize-none overflow-hidden outline-none mt-2"
    />
  );
};

export default AutoResizeTextArea;
