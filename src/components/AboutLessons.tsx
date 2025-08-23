import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutLessons: React.FC = () => {
  return (
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
  );
};

export default AboutLessons;