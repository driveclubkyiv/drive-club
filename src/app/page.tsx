'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { COURSES_LIST } from '@/constant/courses/COURSES_LIST.constant';
import { ProgramCard } from '@/components/ProgramCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  Users,
  Award,
  Shield,
  RefreshCw,
  MapPin,
} from 'lucide-react';
import { InstructorCard } from '@/components/InstructorCard';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export default function HomePage() {
  const featuredCourses = COURSES_LIST.slice(0, 3);

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Навчимо з нуля',
      description:
        'Повний курс для початківців від базових навичок до впевненого водіння',
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
      title: 'Відновимо навички',
      description:
        'Допоможемо відновити втрачені навички після тривалої перерви',
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Підвищимо кваліфікацію',
      description: 'Спеціальні курси для досвідчених водіїв та професіоналів',
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Відновимо після ДТП',
      description: 'Психологічна та практична підтримка після дорожніх пригод',
    },
  ];

  const instructors = [
    {
      name: 'Олексій Мочанов',
      title: 'Консультант-методист',
      experience: 'МСМК, чемпіон VLN (2008)',
      description: [
        'Автогонщик, тест-пілот, чемпіон України з автослалому (1999), призер чемпіонатів України з ралі, чемпіон німецької серії багатогодинних кільцевих перегонів на витривалість — VLN (2008).',
        'Майстер спорту України міжнародного класу (2008).',
        'Автомобільний експерт, популяризатор автоспорту.',
      ],
      image:
        'https://cle7tknx9i41ej9x.public.blob.vercel-storage.com/instructors/mochanov-c.png',
      socialLinks: [
        {
          platform: 'facebook' as const,
          url: 'https://www.facebook.com/alex.mochanov',
        },
      ],
    },
    {
      name: 'Олександр Глюза',
      title: 'Інструктор',
      experience: '14 років інструкторського досвіду',
      description: [
        'Кандидат у майстри автомобільного спорту. Багаторазовий учасник та призер змагань з автослалому і ралі.',
        'Досвід роботи інструктором з контр-аварійної підготовки 14 років.',
      ],
      image:
        'https://cle7tknx9i41ej9x.public.blob.vercel-storage.com/instructors/alex-c.png',
      socialLinks: [
        {
          platform: 'facebook' as const,
          url: 'https://www.facebook.com/aleksandr.gluza/',
        },
        {
          platform: 'instagram' as const,
          url: 'https://www.instagram.com/drive_club_cstd/',
        },
      ],
    },
    {
      name: 'Андрій Стефанович',
      title: 'Інструктор',
      experience: '19 років інструкторського досвіду',
      description: [
        'Багаторазовий учасник та призер змагань з автослалому і ралі.',
        'Досвід роботи інструктором з контр-аварійної підготовки 19 років',
      ],
      image:
        'https://cle7tknx9i41ej9x.public.blob.vercel-storage.com/instructors/stefanovych-c.png',
      socialLinks: [
        {
          platform: 'facebook' as const,
          url: 'https://www.facebook.com/stefanovic.andrej/',
        },
        {
          platform: 'tiktok' as const,
          url: 'https://www.tiktok.com/@drive__club',
        },
      ],
    },
    {
      name: 'Олександр Горбік',
      title: 'Інструктор',
      experience: '7+ років інструкторського досвіду',
      description: [
        'Майстер спорту міжнародного класу. Абсолютний чемпіон України з ралі (2006, 2008).',
        'Рекордсмен за кількістю стартів у ралі; єдиний штурман, що ставав чемпіоном з різними пілотами. 7 перемог в абсолюті на етапах чемпіонатів України.',
        'Досвід роботи інструктором по водінню більше 7 років.',
      ],
      image:
        'https://cle7tknx9i41ej9x.public.blob.vercel-storage.com/instructors/gorbik-c.png',
      socialLinks: [
        {
          platform: 'facebook' as const,
          url: 'https://www.facebook.com/alexandr.gorbik.7?mibextid=LQQJ4d&rdid=9QkZUHy2S0FWLLH6&share_url=https://www.facebook.com/share/qp69FoN2pi33oYqR/?mibextid%3DLQQJ4d',
        },
      ],
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: '18+ років досвіду',
      description: 'Перевірені методики та професійні інструктори',
    },
    {
      icon: Award,
      title: 'Сучасні тренажери',
      description: 'Batak Pro та спеціалізоване обладнання',
    },
    {
      icon: Shield,
      title: 'Індивідуальний підхід',
      description: 'Програми адаптовані під ваш рівень підготовки',
    },
    {
      icon: MapPin,
      title: 'Зручна локація',
      description:
        'Ми знаходимося у центрі Києва— легко дістатися з будь‑якого району',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative aspect-[4/5] sm:aspect-[16/9] min-h-[380px] md:min-h-[560px] flex items-center justify-center overflow-hidden w-full rounded-xl">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 rounded-lg"
        >
          <Image
            src="https://cle7tknx9i41ej9x.public.blob.vercel-storage.com/header-c.png"
            alt="Drive Club - Центр спеціальної підготовки водіїв"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/50 rounded-lg" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Drive Club
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pretty"
          >
            ЦЕНТР СПЕЦІАЛЬНОЇ ПІДГОТОВКИ ВОДІЇВ
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/courses">Переглянути програми</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="py-16 pt-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Хто ми
            </motion.h2>
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                Drive Club — це центр спеціальної підготовки водіїв з понад
                18-річним досвідом роботи. Ми спеціалізуємося на професійному
                навчанні водіїв різного рівня підготовки.
              </p>
              <p>
                Наші напрями включають: базові навички водіння, критичні режими
                руху, спортивну базу, захисне водіння, підготовку водіїв колони
                та кортежу, а також оперативний режим водіння. Використовуємо
                сучасні тренажери та перевірені методики навчання.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="bg-muted/30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 -my-16">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-center mb-8"
              >
                Чим ми можем бути корисними для вас
              </motion.h2>

              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Card className="text-center hover:shadow-lg transition-all duration-300 h-full">
                      <CardHeader className="pb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                          className="flex justify-center mb-4"
                        >
                          {benefit.icon}
                        </motion.div>
                        <CardTitle className="text-lg font-semibold">
                          {benefit.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-4xl mx-auto text-center space-y-6"
              >
                <p className="text-lg leading-relaxed">
                  Індивідуальний підхід і складені нами програми дають
                  можливість за короткий проміжок часу навчитися: новачкам -
                  відчувати себе впевнено від паркування до швидкісних трас,
                  досвідченим водіям - опанувати фізику поведінки авто в
                  критичних ситуаціях, а спецструктурам - ще професійніше
                  виконувати оперативні завдання.
                </p>
                <p className="text-xl font-semibold text-primary">
                  Іншими словами - після проходження наших занять, автомобіль в
                  ваших руках стане інструментом для виконання усіх поставлених
                  задач.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Instructors Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Наші інструктори
              </motion.h2>
              <motion.p
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Професійна команда з багаторічним досвідом та індивідуальним
                підходом до кожного учня
              </motion.p>
            </div>

            <div className="space-y-8">
              {instructors.map((instructor, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <InstructorCard
                    name={instructor.name}
                    title={instructor.title}
                    description={instructor.description}
                    image={instructor.image}
                    experience={instructor.experience}
                    socialLinks={instructor.socialLinks}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Programs Teaser */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="bg-muted/30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 -my-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Наші програми
                </motion.h2>
                <motion.p
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-muted-foreground max-w-2xl mx-auto"
                >
                  Професійні курси для водіїв різного рівня підготовки
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredCourses.map((course, index) => {
                  const minPrice = Math.min(
                    ...course.pricing.options.map((option) => option.amount)
                  );

                  return (
                    <motion.div
                      key={course.id}
                      variants={scaleIn}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        y: -3,
                        transition: { duration: 0.3, ease: 'easeOut' },
                      }}
                      className="h-full"
                    >
                      <ProgramCard
                        id={course.id}
                        title={course.title}
                        blurb={course.subtitle}
                        priceFrom={minPrice}
                        href={`/courses/${course.id}`}
                        img={course.imgLink}
                        duration={course.duration.label}
                        featured={course.id === 'novice-course'}
                      />
                    </motion.div>
                  );
                })}

                <motion.div
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  className="h-full"
                >
                  <ProgramCard
                    id="certificate"
                    title="Подарунковий сертифікат"
                    blurb="Ідеальний подарунок для тих, хто хоче навчитися водити"
                    priceFrom={2000}
                    href="/courses/certificate"
                    img="https://cle7tknx9i41ej9x.public.blob.vercel-storage.com/programs/cert-u-min.jpeg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="max-w-full mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-center mb-12"
            >
              Чому обирають Drive Club
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ y: -5, transition: { duration: 0.4 } }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.4 }}
                      className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <IconComponent className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
