
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Features from "@/components/Features";
import Properties from "@/components/Properties";
import Agents from "@/components/Agents";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SearchBar />
      <Features />
      <Properties />
      <Agents />
      <Testimonials />
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
