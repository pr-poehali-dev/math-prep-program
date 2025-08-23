import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutLessons from '@/components/AboutLessons';
import AboutTeacher from '@/components/AboutTeacher';
import ProgramSection from '@/components/ProgramSection';
import SignupSection from '@/components/SignupSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutLessons />
      <AboutTeacher />
      <ProgramSection />
      <SignupSection />
      <FAQSection scrollToSection={scrollToSection} />
      <Footer />
    </div>
  );
};

export default Index;