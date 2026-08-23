import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Films from "@/components/Films";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grow">
        <Hero />
        <Films />
        <Gallery />
        <Testimonials />
        <About />
        <Packages />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
