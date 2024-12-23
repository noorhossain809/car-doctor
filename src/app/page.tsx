import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Features from "@/components/home/Features";
import Product from "@/components/home/Product";
import Service from "@/components/home/Service";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";


export default function Home() {
  return (
    <div className="container mx-auto ">
      <Banner />
      <About />
      <Service />
      <Contact />
      <Product />
      <Team />
      <Features />
      <Testimonials />
    </div>
  );
}
