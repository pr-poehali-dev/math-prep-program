import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProgramSection: React.FC = () => {
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

  return (
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
  );
};

export default ProgramSection;