import React from 'react';
import Icon from '@/components/ui/icon';

const AboutTeacher: React.FC = () => {
  return (
    <section id="teacher" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">О преподавателе-энтузиасте</h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/img/662aa777-dd78-4dc3-b408-747f55d80044.jpg" 
                  alt="Students learning mathematics" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-bold mb-4">Юра - студент ДВФУ</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Студент главного университета Дальнего Востока, который превратил 
                  сложную математику в увлекательное путешествие к пониманию.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Lightbulb" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Философия преподавания</div>
                      <div className="text-muted-foreground">Вместо зубрёжки формул - понимание логики и взаимосвязей</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Target" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Результат</div>
                      <div className="text-muted-foreground">Ученики не только сдают ОГЭ, но и полюбливают математику</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Heart" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Миссия</div>
                      <div className="text-muted-foreground">Показать, что математика - это не скучные цифры, а увлекательный мир открытий</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeacher;