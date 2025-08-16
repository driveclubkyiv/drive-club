import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Eye,
  EyeOff,
  Car,
  Users,
  Wrench,
  Ruler,
  Radar,
  TrafficCone,
  Undo2,
  HelpCircle,
  Ban,
  LightbulbOff,
  Gauge,
  Lamp,
  ArrowLeftRight,
  MoveRight,
  List,
  LoaderPinwheelIcon,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Безпечне водіння - Drive Club',
  description:
    '20 найважливіших порад для безпечного водіння. Захисне водіння та техніки безпеки на дорозі.',
};

const safetyTips = [
  {
    id: 1,
    title: 'Огляд автомобіля перед поїздкою',
    description:
      'Перед виїздом перевірте тиск і стан шин (у т.ч. глибину протектора). Погляньте під авто — чи немає калюжі рідини або сторонніх предметів попереду/під авто.',
    icon: Wrench,
    category: 'Огляд авто',
  },
  {
    id: 2,
    title: 'Налаштуйте посадку та дзеркала',
    description:
      'Посадка має бути анатомічно правильною: діставайте до органів керування, не змінюючи положення в сидінні. Після цього відкоригуйте всі дзеркала.',
    icon: LoaderPinwheelIcon,
    category: 'Посадка та дзеркала',
  },
  {
    id: 3,
    title: 'Пристебніться самі й пристебніть пасажирів',
    description:
      'Ремінь безпеки — найефективніший елемент пасивної/активної безпеки. Не покладайтеся на випадок — довіряйте енергоємним зонам кузова.',
    icon: Shield,
    category: 'Безпека',
  },
  {
    id: 4,
    title: 'Дистанція не менше 3 секунд',
    description:
      'На сухій теплій дорозі витримуйте інтервал ≥3 с: виберіть орієнтир і рахуйте секунди від моменту, коли авто попереду його перетне, до вашого проходження.',
    icon: Ruler,
    category: 'Дистанція',
  },
  {
    id: 5,
    title: 'Уникайте сліпих зон',
    description:
      'Не їдьте в сліпих зонах інших і не дозволяйте триматися у ваших: за потреби зменшіть швидкість або прискортесь, щоби вийти з «мертвих» секторів.',
    icon: EyeOff,
    category: 'Сліпі зони',
  },
  {
    id: 6,
    title: 'Постійно скануйте ризики на маршруті',
    description:
      'Моделюйте потенційно небезпечні сценарії (зупинки, зупинки громадського транспорту тощо) і будьте готові до них щоразу.',
    icon: Radar,
    category: 'Передбачення',
  },
  {
    id: 7,
    title: 'Обережно на світлофорах',
    description:
      'Найбільше ДТП трапляється через 2–3 с після зміни сигналу. Частіше обирайте гальмо, не стартуйте на жовтий і не поспішайте виїжджати на непроглядні перехрестя.',
    icon: TrafficCone,
    category: 'Світлофори',
  },
  {
    id: 8,
    title: 'Зупиняйтесь з оглядом шин авто попереду',
    description:
      'У потоці зупиняйтесь так, щоб зі свого місця бачити, як шини авто попереду торкаються дороги — це дає простір для маневру й безпеки.',
    icon: Car,
    category: 'Зупинка в потоці',
  },
  {
    id: 9,
    title: 'Не конфліктуйте на дорозі',
    description:
      'Емоційний стан напряму впливає на стиль керування і ризики. Якщо «всі навколо їдуть погано», з великою ймовірністю ви керуєте небезпечно.',
    icon: Users,
    category: 'Поведінка',
  },
  {
    id: 10,
    title: 'Мінімізуйте рух заднім ходом',
    description:
      'Під час руху заднім ходом оглядовість гірша — плануйте маневри так, щоб уникати зайвого реверсу.',
    icon: Undo2,
    category: 'Задній хід',
  },
  {
    id: 11,
    title: 'Не обганяйте, доки причина повільного руху неясна',
    description:
      'Якщо авто попереду їде повільно/гальмує — спершу зрозумійте причину, лише потім приймайте рішення про обгін.',
    icon: HelpCircle,
    category: 'Обгін',
  },
  {
    id: 12,
    title: 'На стоп-лінії контролюйте заднє дзеркало',
    description:
      'На світлофорі дивіться в центральне дзеркало, доки авто позаду повністю не зупиниться.',
    icon: Eye,
    category: 'Світлофори',
  },
  {
    id: 13,
    title: 'Перед виходом на зустрічну перевірте дзеркала',
    description:
      'Перш ніж виїхати для обгону — подивіться у центральне, потім у ліве дзеркало: переконайтесь, що вас не обганяють.',
    icon: Eye,
    category: 'Обгін',
  },
  {
    id: 14,
    title: 'Не обганяйте за «лідерами обгону»',
    description:
      'Не повторюйте обгін за авто, що вже виїхало на зустрічну — ви можете не побачити зустрічний транспорт або перешкоду.',
    icon: Ban,
    category: 'Обгін',
  },
  {
    id: 15,
    title: 'Допоможіть тому, хто не встигає завершити обгін',
    description:
      'Гальмуйте і зміщуйтесь до узбіччя з увімкненим покажчиком повороту. Не сліпіть дальнім світлом.',
    icon: LightbulbOff,
    category: 'Обгін',
  },
  {
    id: 16,
    title: 'Не обганяйте одразу кілька авто',
    description:
      'Багатоетапний обгін суттєво підвищує ризики: обганяйте лише одне авто за маневр.',
    icon: List,
    category: 'Обгін',
  },
  {
    id: 17,
    title: 'У населених пунктах частіше дивіться на спідометр',
    description:
      'Після траси 50–80 км/год здаються «повільними». Контролюйте швидкість, щоби безпечно проходити повороти і зупинятися.',
    icon: Gauge,
    category: 'Населений пункт',
  },
  {
    id: 18,
    title: 'Вмикайте ближнє світло навіть з ДХО',
    description:
      'Ближнє світло підвищує видимість і помітність у будь-який час доби, навіть якщо працюють денні ходові вогні.',
    icon: Lamp,
    category: 'Освітлення',
  },
  {
    id: 19,
    title: 'Не «серфіть» між смугами',
    description:
      'Часті перестроювання підвищують ризики. Оберіть смугу, де ви не заважаєте і вам не заважають.',
    icon: ArrowLeftRight,
    category: 'Смуга руху',
  },
  {
    id: 20,
    title: 'Перелаштовуйтесь плавно',
    description:
      'Різкі маневри можуть призвести до втрати керованості — перелаштовуйтесь передбачувано і плавно.',
    icon: MoveRight,
    category: 'Смуга руху',
  },
];

const categories = [
  'Всі',
  'Огляд авто',
  'Посадка та дзеркала',
  'Безпека',
  'Дистанція',
  'Сліпі зони',
  'Передбачення',
  'Світлофори',
  'Зупинка в потоці',
  'Поведінка',
  'Задній хід',
  'Обгін',
  'Населений пункт',
  'Освітлення',
  'Смуга руху',
];

export default function SafeDrivePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-20 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/patterns/safety-bg.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Безпечне водіння
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
              20 найважливіших порад для безпечного водіння на дорогах України
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.slice(1, 6).map((category) => (
                <Badge
                  key={category}
                  className="bg-white/20 text-white border-white/30 px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyTips.map((tip) => {
                const IconComponent = tip.icon;
                return (
                  <Card
                    key={tip.id}
                    className="hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-start">
                        <div className="flex-1 mb-2">
                          <div className="flex items-center justify-between">
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-md font-bold px-2 py-1 rounded">
                              {tip.id}
                            </span>
                            <span className="flex flex-row space-x-2">
                              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg flex items-center justify-center">
                                <IconComponent className="h-5 w-5 text-white" />
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {tip.category}
                              </Badge>
                            </span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-lg text-center">
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-50/50 to-red-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Хочете навчитись захисному водінню?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Приєднуйтесь до наших курсів захисного водіння та отримайте
              практичні навички безпечного керування автомобілем
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                <Link href="/courses">Переглянути курси</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                <Link href="/contact">Зв&#39;язатись з нами</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
