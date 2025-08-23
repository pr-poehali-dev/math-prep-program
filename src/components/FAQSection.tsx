import React from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface FAQSectionProps {
  scrollToSection: (id: string) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ scrollToSection }) => {
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
  );
};

export default FAQSection;