import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

export type MessageRole = "user" | "assistant" | "model" | "system" | "bot";

export interface Message {
  role: MessageRole;
  text: string;
}

interface ChatFormProps {
  setChatHistory: React.Dispatch<React.SetStateAction<Message[]>>;
  chatHistory: Message[];
  generateBotResponse: (history: Message[]) => void;
}

const ChatForm = ({
  setChatHistory,
  chatHistory,
  generateBotResponse,
}: ChatFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userMessage = inputRef.current?.value.trim();

    if (!userMessage || !inputRef.current) return;
    inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(
      () =>
        setChatHistory((history) => [
          ...history,
          { role: "model", text: "Thinking..." },
        ]),
      600
    );

    generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);

    console.log(userMessage);
  };
  return (
    <form
      onSubmit={handleSubmit}
      action="#"
      className="chat-form flex items-center bg-white rounded-3xl outline outline-1 outline-brand-primary/20 focus-within:outline-2 focus-within:outline-brand-primary"
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Message..."
        className="message-input border-none outline-none w-full bg-none h-[47px] px-4 py-4 text-base "
        required
      />
      <button className="px-2 py-2 border-none hidden outline-none cursor-pointer shrink-0 text-white mr-2 rounded-full transition duration-300 ease-in bg-brand-primary/90 hover:bg-brand-primary">
        <FaArrowUp className="w-5 h-5" />
      </button>
    </form>
  );
};

export default ChatForm;
