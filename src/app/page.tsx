"use client"

import AiChatbot from "@/components/ai-chatbot/AiChatbot";
import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Features from "@/components/home/Features";
import Product from "@/components/home/Product";
import Service from "@/components/home/Service";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  return (
    <div className="container mx-auto ">
      {/* <Banner />
      <About />
      <Service />
      <Contact />
      <Product />
      <Team />
      <Features />
      <Testimonials /> */}

      <div>
        <button
          id="chatbot-toggler"
          onClick={() => setIsChatbotOpen((prev) => !prev)}
          className="fixed bottom-5 right-5 z-50 bg-[#6D4FC2] text-white p-3 rounded-full shadow-lg hover:bg-[#593bab] transition duration-300 ease-in"
        >
          {isChatbotOpen ? <IoMdClose size={24} /> : <FaDiscord size={24} />}
        </button>

        {isChatbotOpen && <AiChatbot setIsChatbotOpen={setIsChatbotOpen} />}
      </div>
    </div>
  );
}
