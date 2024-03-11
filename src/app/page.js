import About from "@/components/About";
import Card from "@/components/Card";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Whyus from "@/components/Whyus";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Card/>
      <Whyus />
      <ContactUs />
      <Footer/>
    </div>
  );
}
