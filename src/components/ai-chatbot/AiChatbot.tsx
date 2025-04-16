import React, { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";
import { FaAngleDown } from "react-icons/fa6";
import ChatForm, { Message } from "./ChatForm";
import ChatMessage from "./ChatMessage";

interface AiChatbotProps {
  setIsChatbotOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AiChatbot = ({ setIsChatbotOpen }: AiChatbotProps) => {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  const generateBotResponse = async (history: Message[]) => {
    const updateHistory = (text: string) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    // 🔧 Map to Gemini-compatible format without mutating original state
    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: formattedHistory }),
    };

    try {
      const apiUrl =
        "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=AIzaSyBHzvEcuVcIO7uz2i57kB9PXvWFSDGYofo";
      if (!apiUrl) {
        throw new Error(
          "AI_CHAT_BOT_API is not defined in environment variables."
        );
      }

      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Something went wrong...");
      }

      const apiresponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

      updateHistory(apiresponseText);
    } catch (error) {
      console.error("Bot response error:", error);
      updateHistory("Oops! Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);
  return (
    <div className="container mx-auto">
      <div className="chatbot-popup fixed bottom-24 right-10 w-[420px] overflow-hidden bg-white rounded-2xl shadow-md origin-bottom-right transition-all duration-300 ease-in">
        <div className="chat-header flex px-2 py-2 items-center justify-between bg-brand-primary">
          <div className="header-info flex items-center gap-1">
            <ChatbotIcon />
            <h2 className="logo-text text-white text-xl font-bold">Chatbot</h2>
          </div>
          <button
            onClick={() => setIsChatbotOpen((prev) => !prev)}
            className="w-[40px] h-[40px] border-none outline-none text-white cursor-pointer text-xl flex items-center justify-center rounded-full bg-none hover:bg-brand-primary/20 transition duration-300 ease-in"
          >
            <FaAngleDown />
          </button>
        </div>
        <div
          ref={chatBodyRef}
          className="chat-body gap-5 h-[460px] overflow-y-auto px-6 py-5 space-y-4 mb-16"
        >
          <div className="message bot-message flex gap-1 items-center">
            <ChatbotIcon />
            <p className="message-text px-3 py-2 max-w-[75%] break-normal whitespace-pre-line text-base bg-brand-primary/20 rounded-t-lg rounded-bl-sm rounded-br-lg">
              Hey there, How can I help you today?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        <div className="chat-footer absolute bottom-0 w-full bg-white pl-4 pr-5 py-5">
          <ChatForm
            setChatHistory={setChatHistory}
            chatHistory={chatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default AiChatbot;
