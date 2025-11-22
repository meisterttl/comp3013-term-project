"use client";

import { useState } from "react";
import CodeTitleInput from "@/app/components/CodeTitleInput";
import CodeTextArea from "@/app/components/CodeTextArea";
import Button from "@/app/components/Button";

export default function Form({
  block,
  buttonLabel,
}: {
  block: {
    id: number;
    title: string;
    code: string;
  } | null;
  buttonLabel: string;
}) {
  const [titleText, setTitleText] = useState(block ? block.title : "");
  const [codeBlock, setCodeBlock] = useState(block ? block.code : "");

  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setTitleText(inputValue);
  };

  const handleCodeBlock = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const codeBlockValue = e.currentTarget.value;
    setCodeBlock(codeBlockValue);
  };

  return (
    <>
      <CodeTitleInput titleText={titleText} handleInputText={handleInputText} />

      <CodeTextArea codeBlock={codeBlock} handleCodeBlock={handleCodeBlock} />

      <Button label={buttonLabel} isDisabled={!(titleText && codeBlock)} />
    </>
  );
}
