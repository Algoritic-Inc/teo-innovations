import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Hero/>
    <AboutUs/>
    <Services/>
    <FAQ/>
    <CTA/>
    <Footer/>
    </>
  );
}
