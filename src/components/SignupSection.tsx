import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const SignupSection: React.FC = () => {
  useEffect(() => {
    // Load Bitrix24 form script
    const script = document.createElement('script');
    script.setAttribute('data-b24-form', 'inline/2/htm9m9');
    script.setAttribute('data-skip-moving', 'true');
    script.innerHTML = `
      (function(w,d,u){
        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn-ru.bitrix24.ru/b34855850/crm/form/loader_2.js');
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('[data-b24-form="inline/2/htm9m9"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="signup" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Записаться на занятие</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Начните путь к успешной сдаче ОГЭ уже сегодня
          </p>

          <Card className="text-left">
            <CardHeader>
              <CardTitle>Оставьте заявку</CardTitle>
              <CardDescription>
                Мы свяжемся с вами для проведения тестирования и подбора подходящей группы
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Gift" className="h-5 w-5 text-primary" />
                  Что вас ждёт после записи:
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Бесплатное тестирование для определения уровня</li>
                  <li>• Подбор группы с учениками вашего уровня</li>
                  <li>• Доступ к личному кабинету с материалами</li>
                  <li>• Первое занятие для знакомства с форматом</li>
                </ul>
              </div>

              {/* Bitrix24 Form Container */}
              <div id="bitrix-form-container" className="min-h-[400px] w-full">
                <div className="text-center py-8">
                  <div className="animate-pulse">
                    <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-muted rounded w-1/2 mx-auto mb-4"></div>
                    <div className="h-10 bg-muted rounded w-full mb-4"></div>
                    <div className="h-10 bg-muted rounded w-full mb-4"></div>
                  </div>
                  <p className="text-muted-foreground text-sm">Загрузка формы...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;