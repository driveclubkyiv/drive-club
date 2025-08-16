import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Trophy,
  BadgeIcon as Certificate,
  Shield,
  Medal,
  LucideIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Нагороди та сертифікати - Drive Club',
  description:
    'Офіційні нагороди, сертифікати та ліцензії Drive Club. Підтвердження професіоналізму в підготовці водіїв.',
  openGraph: {
    title: 'Нагороди та сертифікати - Drive Club',
    description:
      'Офіційні нагороди, сертифікати та ліцензії Drive Club. Підтвердження професіоналізму в підготовці водіїв.',
  },
  twitter: {
    title: 'Нагороди та сертифікати - Drive Club',
    description:
      'Офіційні нагороди, сертифікати та ліцензії Drive Club. Підтвердження професіоналізму в підготовці водіїв.',
  },
};

type Award = {
  year?: string;
  title: string;
  organization: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

const awards: Award[] = [
  {
    year: '2016',
    title: 'Грамота Центру спеціальних операцій',
    organization: 'Служба безпеки України',
    description:
      'За сприяння в удосконаленні практичних навичок особового складу СБУ з керування службовим автотранспортом.',
    icon: Certificate,
    image: '/medal_images/special_ops.jpg',
  },
  {
    title: 'Подяка Голови СБУ',
    organization: 'Служба безпеки України',
    description:
      'За значний особистий внесок у справу утвердження та зміцнення державної безпеки України.',
    icon: Certificate,
    image: '/medal_images/security_ukraine.jpg',
  },
  {
    title: 'Подяка Патрульної поліції',
    organization: 'Патрульна поліція України',
    description:
      'За віддану службу та особистий внесок у розбудову патрульної поліції.',
    icon: Shield,
    image: '/medal_images/thanks_andrii.jpg',
  },
  {
    year: '2016',
    title: 'Подяка Департаменту поліції охорони',
    organization: 'Національна поліція України — Департамент поліції охорони',
    description:
      'За сприяння в удосконаленні знань, умінь і практичних навичок поліцейських з керування службовим автотранспортом та особистий внесок у спортивні досягнення.',
    icon: Shield,
    image: '/medal_images/police_training.jpg',
  },
  {
    title: 'Подяка СБУ',
    organization: 'Служба безпеки України',
    description:
      'За значний особистий внесок у справу утвердження та зміцнення державної безпеки України.',
    icon: Certificate,
    image: '/medal_images/security_alex.jpg',
  },
  {
    year: '2024',
    title: "Пам'ятний знак «За честь і славу» I ступеня",
    organization: 'Національна академія внутрішніх справ',
    description: 'Державна відзнака «За честь і славу» I ступеня.',
    icon: Trophy,
    image: '/medal_images/medal_andrii.jpg',
  },
  {
    title: 'Подяка Сил спеціальних операцій ЗСУ',
    organization: 'Збройні Сили України — Сили спеціальних операцій',
    description:
      'Подяка за сприяння у підготовці особового складу ССО ЗСУ та надану допомогу.',
    icon: Shield,
    image: '/medal_images/special_alex.jpg',
  },
  {
    year: '2023',
    title: 'Почесна грамота',
    organization: 'Управління державної охорони України',
    description:
      'За сприяння в забезпеченні безпеки органів державної влади України і посадових осіб, високий професіоналізм та плідну співпрацю.',
    icon: Certificate,
    image: '/medal_images/yearly_alex.jpg',
  },
  {
    year: '2024',
    title: 'Почесна грамота (до 32-ї річниці УДО)',
    organization: 'Управління державної охорони України',
    description:
      'За плідну співпрацю та вагомий особистий внесок у діяльність УДО України з нагоди 32-ї річниці утворення.',
    icon: Certificate,
    image: '/medal_images/32_years_award.jpg',
  },
  {
    year: '2019',
    title: 'Подяка',
    organization: 'Управління державної охорони України',
    description:
      'За багаторічну плідну співпрацю, особистий внесок у здійснення державної охорони та допомогу в організації чемпіонатів з багатоборства тілоохоронців.',
    icon: Certificate,
    image: '/medal_images/years_alex.jpg',
  },
  {
    year: '2022',
    title: 'Почесний нагрудний знак «За сприяння війську»',
    organization: 'Збройні Сили України',
    description:
      'Відзначення почесним нагрудним знаком Головнокомандувача ЗСУ «За сприяння війську» (наказ №1775 від 02.12.2022).',
    icon: Trophy,
    image: '/medal_images/medal_andrii_2.jpg',
  },
  {
    title: 'Подяка Патрульної поліції',
    organization: 'Патрульна поліція України',
    description:
      'Подяка за віддану службу та особистий внесок у розбудову патрульної поліції.',
    icon: Shield,
    image: '/medal_images/thanks_andrii.jpg',
  },
  {
    year: '2024',
    title: "Пам'ятний знак «За честь і славу» I ступеня (медаль)",
    organization: 'Національна академія внутрішніх справ',
    description:
      'Офіційна нагорода — пам’ятний знак у формі хреста з червоною емаллю та тризубом, що вручається за особисті заслуги й службу. Фото — сам знак.',
    icon: Medal,
    image: '/medal_images/medal_2.jpg',
  },
  {
    title: 'Відзнака «За сприяння Збройним Силам України»',
    organization: 'Міністерство оборони України',
    description:
      'Відомча нагорода МОУ за значний особистий внесок у розвиток та підтримку Збройних Сил України. На аверсі — постать-Берегиня, лавровий вінок і схрещені мечі.',
    icon: Medal,
    image: '/medal_images/medal.jpg',
  },
];

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 rounded-xl">
        <div className="absolute inset-0 opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-2xl">
                <Certificate className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Нагороди та сертифікати
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Офіційне підтвердження нашого професіоналізму та якості навчання
            </p>
            {/*<div className="flex flex-wrap justify-center gap-4">*/}
            {/*  <Badge variant="secondary" className="px-4 py-2 text-sm">*/}
            {/*    <Award className="h-4 w-4 mr-2" />*/}
            {/*    Ліцензовано МОН України*/}
            {/*  </Badge>*/}
            {/*  <Badge variant="secondary" className="px-4 py-2 text-sm">*/}
            {/*    <Star className="h-4 w-4 mr-2" />*/}
            {/*    ISO 9001:2015*/}
            {/*  </Badge>*/}
            {/*  <Badge variant="secondary" className="px-4 py-2 text-sm">*/}
            {/*    <Medal className="h-4 w-4 mr-2" />*/}
            {/*    18+ років досвіду*/}
            {/*  </Badge>*/}
            {/*</div>*/}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Нагороди, подяки та відзнаки
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Визнання нашої роботи професійною спільнотою та державними
              органами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-500 border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50"
                >
                  <div className="aspect-[9/14] relative overflow-hidden">
                    <Image
                      src={award.image || '/placeholder.svg'}
                      alt={award.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    {/*<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />*/}
                    <div className="absolute bottom-8 left-4 right-4">
                      {award.year && (
                        <Badge className="bg-white/90 text-gray-900 border-0 mb-2">
                          {award.year}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-xl">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                          {award.title}
                        </CardTitle>
                        <p className="text-sm font-medium text-orange-600 mb-2">
                          {award.organization}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Навчайтесь у ліцензованих професіоналів
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Наші офіційні ліцензії та сертифікати гарантують високу якість
              навчання та відповідність всім державним стандартам
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                <Link href="/courses">Обрати курс навчання</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white font-semibold px-8 py-4 bg-transparent"
              >
                <Link
                  href="/contact"
                  className="transition-colors duration-300"
                >
                  Отримати консультацію
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
