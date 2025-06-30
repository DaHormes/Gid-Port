
// components 
//import {  Navbar, Footer } from "@/components";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// sections
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <> 
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <ContactForm />
      <Footer />
    </>
  );
}

//<Clients />
//<Testimonial />
//<PopularClients />
//import Clients from "./clients";
//import Testimonial from "./testimonial";
//import PopularClients from "./popular-clients";