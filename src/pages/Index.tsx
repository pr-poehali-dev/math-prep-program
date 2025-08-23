import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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

  const lessonProgram = [
    "Обыкновенные дроби", "Десятичные дроби ч.1", "Десятичные дроби ч.2", "Проценты",
    "Среднее арифметическое", "Отрицательные числа", "Работа с переменными", "Решение уравнений",
    "Решение задач с помощью уравнений", "Решение задач с помощью уравнений на проценты из второй части",
    "Решение задач на движение из второй части", "Смежные и вертикальные углы", "Треугольники",
    "Равнобедренный треугольник и его свойства", "Линейная функция", "Степень", "Многочлены",
    "ФСУ", "Параллельные прямые и углы при параллельных прямых", "Теорема о сумме углов треугольника",
    "Некоторые свойства прямоугольных треугольников", "Системы линейных уравнений",
    "Решение задач с помощью системы линейных уравнений из второй части", "Вероятность",
    "Обратная пропорциональность", "Многоугольники", "Параллелограмм. Признаки параллелограмма. Трапеция.",
    "Прямоугольник. Ромб и квадрат", "Квадратные корни ч.1", "Квадратные корни ч.2",
    "Квадратные уравнения ч.1", "Квадратные уравнения ч.2", "Решение квадратных уравнений из второй части ч.1",
    "Решение квадратных уравнений из второй части ч.2", "Решение квадратных уравнений из второй части ч.3",
    "Площадь прямоугольника. Площадь параллелограмма. Площадь треугольника. Площадь трапеции. Ч.1.",
    "Ч.2.", "Теорема Пифагора", "Решение задач по геометрии из второй части. Ч.1",
    "Решение задач по геометрии из второй части ч.2", "Решение задач из второй части ч.1 21 номер",
    "Решение задач из второй части ч.2", "Решение задач из второй части ч.3", "Решение картинок ч.1",
    "Решение картинок ч.2", "Подобные треугольники ч.1", "Подобные треугольники ч.2",
    "Подобные треугольники ч.3", "Решение задач из второй части на подобные треугольники",
    "Тригонометрия", "Линейные неравенства", "Степень с целым показателем", "Формулы",
    "Квадратичная функция", "Квадратичные неравенства", "Неравенства из второй части",
    "Числовые последовательности", "Соотношение в треугольнике", "Окружность и круг"
  ];

  const bonusTopics = [
    "Как на пальцах считать до 1000",
    "Как мошенники используют теорию вероятностей",
    "Комбинация карт или сколько секунд осталось до смерти",
    "Какая вероятность выиграть в лотерею",
    "Почему минус на минус дает плюс?",
    "Почему числитель умножаем на числитель",
    "Как связана география и математика",
    "Как связана информатика и математика",
    "Откуда появился этот Дискриминант",
    "Как посчитать сколько драже в банке",
    "Почему синус 30 градусов равен 1/2",
    "Теорема синусов и косинусов",
    "Парадокс дней рождений",
    "Математические модели в биологии",
    "Замедление YouTube",
    "Задача Монти Холла",
    "Математика в игре блэк-джек",
    "Числа Фибоначчи",
    "Золотое сечение"
  ];

  const faqs = [
    {
      question: "Подходят ли занятия для учеников 8 класса?",
      answer: "Да! В ОГЭ 90% информации - это материал 5-8 классов, поэтому мои занятия отлично подойдут и восьмиклассникам для укрепления базы."
    },
    {
      question: "Сколько человек в группе?",
      answer: "В группе занимается 8-12 человек. Это оптимальное количество для качественного обучения - достаточно для мотивации, но не слишком много для индивидуального подхода."
    },
    {
      question: "Что включает личный кабинет ученика?",
      answer: "Личный кабинет содержит домашние задания с автоматической проверкой, трекер выполненных заданий, авторские конспекты всех занятий и видеозаписи уроков."
    },
    {
      question: "Чем ваши занятия отличаются от других репетиторов?",
      answer: "Я не учу просто подставлять цифры в формулы. Мы изучаем математику по-настоящему - строим логические связи, понимаем суть процессов и развиваем математическое мышление."
    },
    {
      question: "Что такое бесплатные дополнительные занятия?",
      answer: "Это увлекательные уроки, где мы разбираем, зачем нужна математика в жизни. От счета на пальцах до 1000 до математики в покере - показываю, как математика работает в реальном мире."
    },
    {
      question: "Как формируются группы?",
      answer: "Группы формируются из учеников с одинаковым уровнем знаний после предварительного тестирования. Это обеспечивает комфортный темп обучения для всех."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">О занятиях</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Уникальный подход к изучению математики через понимание, а не механическое запоминание
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Brain" className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Учим мыслить, не зубрить</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  В отличие от других репетиторов, я учу строить взаимосвязи и понимать логику математики, 
                  а не просто подставлять цифры в формулы.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Группы по уровню</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Группы формируются из учеников с одинаковым уровнем знаний. 
                  Это обеспечивает комфортный темп обучения для каждого.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Monitor" className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Личный кабинет</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Домашние задания с автопроверкой, трекер прогресса, 
                  авторские конспекты и видеозаписи всех уроков.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Calendar" className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Прозрачная программа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ученики и родители знают программу курса на год вперёд. 
                  Никаких сюрпризов - только планомерная подготовка.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Gift" className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Бесплатные занятия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  19 увлекательных дополнительных занятий о том, 
                  зачем нужна математика и как она работает в реальной жизни.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="MessageCircle" className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Всегда на связи</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ученики могут задать вопрос в группе в любое время. 
                  Я или мой помощник обязательно ответим.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
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

      {/* Program Section */}
      <section id="program" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Программа курса</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              59 основных занятий + 19 бесплатных дополнительных занятий о применении математики в жизни
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Main Program */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" className="h-6 w-6" />
                  Основная программа (59 занятий)
                </CardTitle>
                <CardDescription>
                  Полный курс подготовки к ОГЭ по математике от основ до сложных задач
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                  {lessonProgram.map((lesson, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                        {index + 1}
                      </div>
                      <span className="text-sm">{lesson}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bonus Program */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Star" className="h-6 w-6" />
                  Бесплатные дополнительные занятия (19 тем)
                </CardTitle>
                <CardDescription>
                  Увлекательные занятия о применении математики в реальной жизни
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                  {bonusTopics.map((topic, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <Icon name="Sparkles" className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Signup Section */}
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-xl text-muted-foreground">
                Ответы на популярные вопросы о занятиях и методике преподавания
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-4">
                Не нашли ответ на свой вопрос?
              </p>
              <Button variant="outline" onClick={() => scrollToSection('signup')}>
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                Задать вопрос при записи
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;