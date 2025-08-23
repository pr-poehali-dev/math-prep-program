import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background"></div>
      <div className="container mx-auto text-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/img/2dedfa44-c772-4cb5-90b8-8c77e0d3c2ac.jpg" 
              alt="Mathematical education" 
              className="w-24 h-24 mx-auto rounded-2xl shadow-lg object-cover mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Подготовка к ОГЭ по математике<br />
            <span className="text-primary">с пониманием, а не зубрёжкой</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Студент ДВФУ научит не просто решать задачи, а понимать математику. 
            Группы 8-12 человек, личный кабинет и бесплатные развивающие занятия.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection('signup')} className="text-lg px-8 py-6">
              <Icon name="BookOpen" className="mr-2 h-5 w-5" />
              Записаться на занятие
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('program')} className="text-lg px-8 py-6">
              <Icon name="Eye" className="mr-2 h-5 w-5" />
              Посмотреть программу
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">8-12</div>
              <div className="text-sm text-muted-foreground">человек в группе</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">59</div>
              <div className="text-sm text-muted-foreground">занятий в программе</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">19</div>
              <div className="text-sm text-muted-foreground">бесплатных доп. занятий</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;