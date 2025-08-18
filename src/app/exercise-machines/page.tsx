import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Gamepad2,
  Target,
  Zap,
  Eye,
  Brain,
  Timer,
  LoaderPinwheelIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Тренажери та вправи - Drive Club',
  description:
    'Сучасні тренажери для підготовки водіїв: Batak Pro, симулятори водіння, вправи на реакцію та координацію. Професійне обладнання для ефективного навчання.',
  openGraph: {
    title: 'Тренажери та вправи - Drive Club',
    description:
      'Сучасні тренажери для підготовки водіїв: Batak Pro, симулятори водіння, вправи на реакцію та координацію. Професійне обладнання для ефективного навчання.',
  },
  twitter: {
    title: 'Тренажери та вправи - Drive Club',
    description:
      'Сучасні тренажери для підготовки водіїв: Batak Pro, симулятори водіння, вправи на реакцію та координацію. Професійне обладнання для ефективного навчання.',
  },
};

export default function ExercisePage() {
  const simulators = [
    {
      name: 'Репліка Batak Pro',
      description:
        'Професійний тренажер для розвитку реакції, координації та периферійного зору',
      features: [
        'Розвиток реакції',
        'Координація рухів',
        'Периферійний зір',
        'Концентрація уваги',
      ],
      image:
        'https://cle7tknx9i41ej9x.public.blob.vercel-storage.com/machines/batak-c.jpg',
      category: 'Реакція та координація',
    },
    {
      name: 'Reflex Glasses',
      description:
        'Тимчасово частково або повністю обмежують оглядовість для відпрацювання навички швидшого прийняття рішень в критичних ситуаціях',
      features: [
        'Швидкість сприйняття',
        "Зорова пам'ять",
        "Розпізнавання об'єктів",
        'Оцінка відстані',
      ],
      image:
        'https://cle7tknx9i41ej9x.public.blob.vercel-storage.com/machines/reflex-glass-c.jpg',
      category: 'Зорове сприйняття',
    },
    {
      name: '“Flash rotation”',
      description:
        'Тренажер з сенсорними клавішами‑лампами для тестування швидкісного обертання керма та реакції.',
      features: [
        'Швидкісне обертання керма',
        'Розвиток реакції',
        'Координація рук‑очей',
      ],
      image:
        'https://cle7tknx9i41ej9x.public.blob.vercel-storage.com/machines/flash-rotate-c.jpg',
      category: 'Кермування та реакція',
    },
    {
      name: 'Класичний тренажер кермування',
      description:
        'Класичний тренажер для напрацювання техніки прийомів точного швидкісного обертання.',
      features: [
        'Точність обертання',
        'Швидкість роботи кермом',
        'Стабільність траєкторії',
      ],
      image:
        'https://cle7tknx9i41ej9x.public.blob.vercel-storage.com/machines/flash-react-c.jpg',
      category: 'Кермування (точність)',
    },
    {
      name: '“Перекидач”',
      description:
        'Тренажер, який імітує ДТП з перекиданням автомобіля для відпрацювання дій.',
      features: [
        'Алгоритм дій при перекиданні',
        'Використання ременя та фіксація тіла',
        'Психологічна готовність до нестандартних ситуацій',
      ],
      image:
        'https://cle7tknx9i41ej9x.public.blob.vercel-storage.com/machines/upside-c.jpg',
      category: 'Безпека та дії при ДТП',
    },
    {
      name: 'Полігон критичних режимів',
      description:
        'Відпрацювання критичних і нестандартних поведінок автомобіля за будь-якої погоди.',
      features: [
        'Керування ковзанням (контркермування)',
        'Гальмування та розгін на різних покриттях',
        'Робота з газом і балансом авто',
      ],
      image:
        'https://cle7tknx9i41ej9x.public.blob.vercel-storage.com/machines/artificial-ice-c.jpg',
      category: 'Керованість у критичних режимах',
    },
  ];

  const exercises = [
    {
      title: 'Вправи на реакцію',
      description:
        'Комплекс вправ для розвитку швидкості реакції на дорожні ситуації',
      duration: '15-20 хвилин',
      difficulty: 'Початковий',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: 'Периферійний зір',
      description: "Розвиток здатності помічати об'єкти боковим зором",
      duration: '10-15 хвилин',
      difficulty: 'Початковий',
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: 'Швидкість і точність руління',
      description:
        'Вправи для розвитку швидкості роботи кермом та точності траєкторії',
      duration: '25-30 хвилин',
      difficulty: 'Просунутий',
      icon: <LoaderPinwheelIcon className="h-6 w-6" />,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Початковий':
        return 'bg-green-100 text-green-800';
      case 'Середній':
        return 'bg-yellow-100 text-yellow-800';
      case 'Просунутий':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-20 pt-20 overflow-hidden rounded-xl">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Gamepad2 className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Тренажери та вправи
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Сучасне обладнання для ефективної підготовки водіїв та розвитку
              професійних навичок
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                Batak Pro
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                Симулятори
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                Cлизьке покриття
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                Швидкісне руління
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <section className="mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Професійне обладнання
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  У Drive Club ми використовуємо найсучасніші тренажери та
                  спеціалізоване обладнання для розвитку навичок, необхідних для
                  безпечного водіння. Наші тренажери допомагають розвинути
                  реакцію, координацію, зорове сприйняття та психологічну
                  стійкість.
                </p>
              </div>
            </section>

            {/* Simulators */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                Наші тренажери
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {simulators.map((simulator, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={simulator.image || '/placeholder.svg'}
                        alt={simulator.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          {simulator.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {simulator.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        {simulator.description}
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2">Що розвиває:</h4>
                        <div className="flex flex-wrap gap-2">
                          {simulator.features.map((feature, featureIndex) => (
                            <Badge
                              key={featureIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Exercises */}
            <section className="mb-16 bg-gradient-to-br from-orange-50/30 to-red-50/30 -mx-4 px-4 py-16 rounded-2xl">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Типи вправ
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {exercises.map((exercise, index) => (
                    <Card
                      key={index}
                      className="text-center hover:shadow-lg transition-shadow duration-300"
                    >
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full text-white">
                            {exercise.icon}
                          </div>
                        </div>
                        <CardTitle className="text-lg">
                          {exercise.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          {exercise.description}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2">
                            <Timer className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{exercise.duration}</span>
                          </div>
                          <Badge
                            className={getDifficultyColor(exercise.difficulty)}
                          >
                            {exercise.difficulty}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Переваги тренажерної підготовки
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full flex-shrink-0 self-center">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          Безпечне навчання
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Відпрацювання складних ситуацій без ризику для життя
                          та здоров&#39;я
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full flex-shrink-0 self-center">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          Швидкий розвиток навичок
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Інтенсивне тренування дозволяє швидко покращити
                          реакцію та координацію
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full flex-shrink-0 self-center">
                        <Brain className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          Психологічна підготовка
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Розвиток стресостійкості та впевненості за кермом
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full flex-shrink-0 self-center">
                        <Eye className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Покращення зору</h3>
                        <p className="text-muted-foreground text-sm">
                          Тренування зорового сприйняття та периферійного зору
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full flex-shrink-0 self-center">
                        <Timer className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          Об&#39;єктивна оцінка
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Точне вимірювання прогресу та виявлення слабких місць
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full flex-shrink-0 self-center">
                        <Gamepad2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Цікавий процес</h3>
                        <p className="text-muted-foreground text-sm">
                          Ігровий формат робить навчання захоплюючим та
                          мотивуючим
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center bg-gradient-to-br from-orange-50/50 to-red-50/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                Готові спробувати наші тренажери?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Запишіться на пробне заняття та оцініть ефективність нашого
                обладнання. Перше тренування на тренажерах входить у вартість
                будь-якого курсу.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  <Link href="/contact">Записатися на заняття</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <Link href="/courses">Переглянути курси</Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
