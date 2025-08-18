import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, Phone, Clock, Users, Award, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Подарунковий сертифікат - Drive Club',
  description:
    'Подарунковий сертифікат на навчання водінню - ідеальний подарунок для близьких. Різні номінали, тривалий термін дії, можливість вибору курсу.',
  keywords: [
    'подарунковий сертифікат',
    'навчання водінню',
    'подарунок',
    'Drive Club',
    'курси водіння',
  ],
  openGraph: {
    title: 'Подарунковий сертифікат - Drive Club',
    description:
      'Подарунковий сертифікат на навчання водінню - ідеальний подарунок для близьких. Різні номінали, тривалий термін дії, можливість вибору курсу.',
  },
  twitter: {
    title: 'Подарунковий сертифікат - Drive Club',
    description:
      'Подарунковий сертифікат на навчання водінню - ідеальний подарунок для близьких. Різні номінали, тривалий термін дії, можливість вибору курсу.',
  },
};

export default function CertificatePage() {
  const certificateOptions = [
    {
      name: 'Новачок (свій автомобіль)',
      amount: 2000,
      description: '1,5 год — власний автомобіль',
      popular: false,
    },
    {
      name: 'Новачок (авто центру)',
      amount: 2300,
      description: '1,5 год — авто центру',
      popular: false,
    },
    {
      name: 'Досвідчений (свій автомобіль)',
      amount: 3500,
      description: '1,5 год — власний автомобіль',
      popular: false,
    },
    {
      name: 'Досвідчений (авто центру)',
      amount: 4000,
      description: '1,5 год — авто центру',
      popular: false,
    },
    {
      name: 'Спец курс (свій автомобіль)',
      amount: 4300,
      description: '1,5 год — власний автомобіль',
      popular: true,
    },
    {
      name: 'Спец курс (авто центру)',
      amount: 4800,
      description: '1,5 год — авто центру',
      popular: false,
    },
    {
      name: 'Індивідуальний сертифікат',
      amount: 'Сума за вашим бажанням',
      description:
        'Ви самі визначаєте суму сертифіката — подаруйте стільки, скільки хочете',
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: <Gift className="h-6 w-6 text-primary" />,
      title: 'Безмежні заняття',
      description:
        'Можна подарувати та придбати будь-яку кількість занять для рідних та друзів',
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Розвиток реакції',
      description:
        'Заняття допомагають розвивати оперативність та швидкість реакції',
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Для всіх рівнів',
      description:
        'Курси підходять як для новачків, так і для досвідчених водіїв',
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: 'Яскраві емоції',
      description: 'Отримуйте незабутні враження та впевненість за кермом',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Оберіть сертифікат',
      description: 'Визначте номінал, який хочете подарувати',
    },
    {
      step: '2',
      title: 'Звʼяжіться з нами',
      description:
        'Зателефонуйте нам або заповніть форму на сайті для того щоб ми вам передзвонили',
    },
    {
      step: '3',
      title: 'Отримайте сертифікат',
      description:
        'Сертифікат можна отримати самостійно або замовити доставку Новою поштою по всій Україні',
    },
    {
      step: '4',
      title: 'Вручіть та активуйте',
      description:
        'Подаруйте сертифікат отримувачу — він активує його та записується на заняття у зручний час',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-20 bg-gradient-to-r from-orange-500 to-red-500 overflow-hidden rounded-xl">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex justify-center mb-6">
            <Gift className="h-20 w-20" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Подарунковий сертифікат
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Ідеальний подарунок для тих, хто хоче навчитися водити або підвищити
            свою кваліфікацію
          </p>
        </div>
      </section>

      <div className="container px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Чому сертифікат Drive Club?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Подарунковий сертифікат Drive Club — це можливість подарувати
                професійне навчання водінню від досвідчених інструкторів. Ваші
                близькі зможуть обрати зручний час та програму навчання, а ви
                будете впевнені в якості отриманих знань та навичок.
              </p>
            </div>
          </section>

          {/* Certificate Options */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Номінали сертифікатів
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificateOptions.map((option, index) => {
                const isLast = index === certificateOptions.length - 1;
                const cardClasses = [
                  'relative overflow-hidden hover:shadow-lg transition-shadow duration-400',
                  option.popular ? 'ring-2 ring-primary' : '',
                  isLast ? 'lg:col-start-2' : '',
                ]
                  .join(' ')
                  .trim();

                return (
                  <Card key={index} className={cardClasses}>
                    {option.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-white">
                          Популярний
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Gift className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{option.name}</CardTitle>
                      <div className="text-3xl font-bold text-primary">
                        {option.amount} ₴
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm">
                        {option.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Переваги подарункового сертифіката
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Як це працює
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Terms and Conditions */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Умови використання
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Термін дії</h4>
                          <p className="text-sm text-muted-foreground">
                            12 місяців з дати покупки
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Передача</h4>
                          <p className="text-sm text-muted-foreground">
                            Сертифікат можна передавати іншим особам
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Вибір курсу</h4>
                          <p className="text-sm text-muted-foreground">
                            Можна обрати будь-який курс в межах номіналу
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Доплата</h4>
                          <p className="text-sm text-muted-foreground">
                            При виборі дорожчого курсу можна доплатити різницю
                          </p>
                        </div>
                      </div>

                      {/*<div className="flex items-start gap-3">*/}
                      {/*  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />*/}
                      {/*  <div>*/}
                      {/*    <h4 className="font-semibold">Повернення</h4>*/}
                      {/*    <p className="text-sm text-muted-foreground">*/}
                      {/*      Невикористаний сертифікат можна повернути протягом*/}
                      {/*      30 днів*/}
                      {/*    </p>*/}
                      {/*  </div>*/}
                      {/*</div>*/}

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Активація</h4>
                          <p className="text-sm text-muted-foreground">
                            Для активації потрібно зателефонувати та записатися
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-primary/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">
              Готові замовити сертифікат?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Зателефонуйте нам, і ми оформимо красивий подарунковий сертифікат.
              Можлива доставка по Києву або самовивіз з нашого офісу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button size="lg" className="text-lg px-8">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:0639806051">(063) 980-60-51</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:0667824728">(066) 782-47-28</a>
              </Button>
            </div>
            <div className="text-center">
              <Button asChild variant="outline">
                <Link href="/contact">Детальніше про замовлення</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
