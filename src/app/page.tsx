import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import FeaturedProject from '@/components/FeaturedProject';
import ProjectGrid from '@/components/ProjectGrid';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <ProjectGrid />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
