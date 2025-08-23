import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Icon name="Calculator" className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Математика с Юрой</span>
          </div>
          <div className="text-center text-muted-foreground">
            <p>© 2024 Подготовка к ОГЭ по математике</p>
            <p className="text-sm">Студент ДВФУ • Персональный подход • Гарантия результата</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;