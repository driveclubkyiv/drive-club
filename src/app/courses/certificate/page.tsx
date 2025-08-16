import type { Metadata } from 'next';
import Image from 'next/image';
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
};

export default function CertificatePage() {
  const certificateOptions = [
    {
      name: 'Базовий сертифікат',
      amount: 2000,
      description: 'Покриває частину вартості будь-якого курсу',
      popular: false,
    },
    {
      name: 'Стандартний сертифікат',
      amount: 3500,
      description: 'Повна вартість курсу для новачків',
      popular: true,
    },
    {
      name: 'Преміум сертифікат',
      amount: 4300,
      description: 'Покриває курс підвищення кваліфікації',
      popular: false,
    },
    // {
    //   name: "VIP сертифікат",
    //   amount: 7000,
    //   description: "Спеціальна підготовка + додаткові послуги",
    //   popular: false,
    // },
  ];

  const benefits = [
    {
      icon: <Gift className="h-6 w-6 text-primary" />,
      title: 'Універсальний подарунок',
      description: 'Підходить для людей будь-якого віку та рівня підготовки',
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Тривалий термін дії',
      description: 'Сертифікат дійсний протягом 12 місяців з дати покупки',
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Вибір курсу',
      description: 'Можливість обрати будь-який курс відповідно до номіналу',
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: 'Професійне навчання',
      description: 'Доступ до всіх наших програм та досвідчених інструкторів',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Оберіть номінал',
      description: 'Виберіть сертифікат відповідно до бажаного курсу',
    },
    {
      step: '2',
      title: 'Оформіть замовлення',
      description: 'Зателефонуйте нам або заповніть форму на сайті',
    },
    {
      step: '3',
      title: 'Отримайте сертифікат',
      description: 'Красиво оформлений сертифікат готовий до вручення',
    },
    {
      step: '4',
      title: 'Активуйте сертифікат',
      description: 'Отримувач записується на курс за номером сертифіката',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <Image
          src="/images/certificate-hero.jpg"
          alt="Подарунковий сертифікат Drive Club"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex justify-center mb-6">
            <Gift className="h-20 w-20 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Подарунковий сертифікат
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Ідеальний подарунок для тих, хто хоче навчитися водити або підвищити
            свою кваліфікацію
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            <a href="tel:0639806051">Замовити сертифікат</a>
          </Button>
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {certificateOptions.map((option, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden hover:shadow-lg transition-shadow ${
                    option.popular ? 'ring-2 ring-primary' : ''
                  }`}
                >
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
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16">
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

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Повернення</h4>
                          <p className="text-sm text-muted-foreground">
                            Невикористаний сертифікат можна повернути протягом
                            30 днів
                          </p>
                        </div>
                      </div>

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
