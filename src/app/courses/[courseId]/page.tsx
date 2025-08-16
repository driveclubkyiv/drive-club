'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { COURSES_LIST } from '@/constant/courses/COURSES_LIST.constant';
import { FactList } from '@/components/FactList';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, Phone } from 'lucide-react';

export default function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>();

  const course = COURSES_LIST.find((c) => c.id === courseId);

  if (!course) {
    return notFound();
  }

  const sessions = course.pricing.courseLength?.sessions;
  const sessionMinutes = course.pricing.courseLength?.sessionMinutes;

  const formatUAH = (n: number) => n.toLocaleString('uk-UA');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-20 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/patterns/course-bg.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2">
              {course.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              {course.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                {course.duration.label}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                {course.location.label}
              </Badge>
              {typeof sessions === 'number' && (
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                  {sessions} занять
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Course Overview */}
                <section>
                  <h2 className="text-3xl font-bold mb-6">Про курс</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </section>

                {/* Course Program */}
                <section>
                  <h2 className="text-3xl font-bold mb-6">Програма курсу</h2>
                  <div className="space-y-6">
                    {course.program.map((section, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-all duration-300"
                      >
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                              Розділ {index + 1}
                            </Badge>
                            {section.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {section.items.map((item, itemIndex) => {
                              if (typeof item === 'string') {
                                return (
                                  <li
                                    key={itemIndex}
                                    className="flex items-start gap-2"
                                  >
                                    <div className="w-2 h-2 bg-gradient-to-r from-orange-50 to-red-50 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-sm">{item}</span>
                                  </li>
                                );
                              }
                              return (
                                <li key={itemIndex} className="space-y-2">
                                  <div className="font-medium">
                                    {item.title}
                                  </div>
                                  {item.children &&
                                    item.children.length > 0 && (
                                      <ul className="ml-4 space-y-2">
                                        {item.children.map(
                                          (child, childIndex) => (
                                            <li
                                              key={childIndex}
                                              className="flex items-start gap-2"
                                            >
                                              <div className="w-2 h-2 bg-gradient-to-r from-orange-50 to-red-50 rounded-full mt-2 flex-shrink-0" />
                                              <span className="text-sm">
                                                {child}
                                              </span>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    )}
                                </li>
                              );
                            })}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Course Facts */}
                <FactList
                  title="Деталі курсу"
                  facts={
                    [
                      { label: 'Тривалість', value: course.duration.label },
                      sessions && {
                        label: 'Кількість занять',
                        value: `${sessions} занять`,
                      },
                      {
                        label: 'Тривалість заняття',
                        value: sessionMinutes
                          ? `${sessionMinutes} хв`
                          : `${course.duration.minutes} хв`,
                      },
                      { label: 'Локація', value: course.location.label },
                      {
                        label: 'Організація',
                        value: course.contacts.organization,
                      },
                    ].filter(Boolean) as { label: string; value: string }[]
                  }
                />

                {/* Pricing */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Вартість навчання
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {course.pricing.sessionLabel}
                    </p>

                    {course.pricing.options.map((option, index) => (
                      <div
                        key={index}
                        className="p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <div className="font-semibold">{option.label}</div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">
                              {formatUAH(option.amount)} ₴/
                              <br />
                              {option.per}
                            </div>
                          </div>
                        </div>
                        {option.includes && option.includes.length > 0 && (
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {option.includes.map((inc, i) => (
                              <li key={i}>{inc}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {course.pricing.courseLength && (
                      <p className="text-sm text-muted-foreground italic">
                        Тривалість курсу: {course.pricing.courseLength.sessions}{' '}
                        занять по {course.pricing.courseLength.sessionMinutes}{' '}
                        хв
                      </p>
                    )}

                    {course.pricing.courseRecommendation && (
                      <p className="text-sm text-muted-foreground">
                        {course.pricing.courseRecommendation}
                      </p>
                    )}
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Записатися на курс
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Зателефонуйте нам для запису на курс або отримання
                      додаткової інформації
                    </p>

                    <div className="space-y-2">
                      {course.contacts.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="flex items-center gap-2 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg hover:from-orange-100 hover:to-red-100 transition-colors"
                        >
                          <Phone className="h-4 w-4 text-primary" />
                          <span className="font-medium">{phone}</span>
                        </a>
                      ))}
                    </div>

                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>
                        <span className="font-medium">Організація: </span>
                        {course.contacts.organization}
                      </div>
                      <div>
                        <span className="font-medium">Адреса: </span>
                        {course.contacts.address}
                        {course.contacts.addressLink && (
                          <>
                            {' '}
                            <a
                              href={course.contacts.addressLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                              На мапі
                            </a>
                          </>
                        )}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    >
                      <Link href="/contact">Детальніше про запис</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Additional Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Додаткова інформація</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Тривалість: {course.duration.label}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Організація: {course.contacts.organization}</span>
                    </div>
                    {course.certificate && (
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-primary" />
                        <span>Сертифікат: {course.certificate}</span>
                      </div>
                    )}
                    {course.notes && course.notes.length > 0 && (
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {course.notes.map((n, i) => (
                          <li key={i}>{n}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Related Courses */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                Інші курси
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {COURSES_LIST.filter((c) => c.id !== course.id)
                  .slice(0, 3)
                  .map((relatedCourse) => {
                    const minPrice = Math.min(
                      ...relatedCourse.pricing.options.map(
                        (option) => option.amount
                      )
                    );
                    return (
                      <Card
                        key={relatedCourse.id}
                        className="overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="aspect-video relative">
                          <Image
                            src={`/images/programs/${relatedCourse.id}-card.png`}
                            alt={relatedCourse.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg">
                            {relatedCourse.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4">
                            {relatedCourse.subtitle}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-primary">
                              від {formatUAH(minPrice)} ₴
                            </span>
                            <Button
                              asChild
                              size="sm"
                              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                            >
                              <Link href={`/courses/${relatedCourse.id}`}>
                                Детальніше
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
