import React from "react";
import ChatbotIcon from "./ChatbotIcon";
import { Message } from "./ChatForm";

interface ChatMessageProps {
  chat: Message;
}

const ChatMessage = ({ chat }: ChatMessageProps) => {
  return (
    <div
      className={`message ${chat.role === "model" ? "bot" : "user"}-message `}
    >
      {chat.role === "model" && <ChatbotIcon />}
      <p
        className={`message-text ${
          chat.role === "user"
            ? "bg-brand-primary text-white rounded-t-lg rounded-bl-lg rounded-br-sm"
            : "bg-brand-primary/20 text-black rounded-t-lg rounded-bl-sm rounded-br-lg"
        } px-3 py-2 max-w-[75%] break-normal whitespace-pre-line text-base`}
      >
        {chat.text}
      </p>
    </div>
  );
};

export default ChatMessage;
