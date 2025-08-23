import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Calculator" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Математика с Юрой</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              О занятиях
            </button>
            <button onClick={() => scrollToSection('teacher')} className="text-sm font-medium hover:text-primary transition-colors">
              О преподавателе
            </button>
            <button onClick={() => scrollToSection('program')} className="text-sm font-medium hover:text-primary transition-colors">
              Программа
            </button>
            <button onClick={() => scrollToSection('signup')} className="text-sm font-medium hover:text-primary transition-colors">
              Записаться
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </button>
          </nav>
          <Button onClick={() => scrollToSection('signup')} className="hidden md:inline-flex">
            Записаться на занятие
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;