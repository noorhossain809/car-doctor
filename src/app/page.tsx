import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Service from "@/components/home/Service";


export default function Home() {
  return (
    <div className="container mx-auto ">
      <Banner />
      <About />
      <Service />
    </div>
  );
}
