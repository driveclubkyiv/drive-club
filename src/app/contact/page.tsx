'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Телефони',
    details: ['+38 (063) 980-60-51', '+38 (066) 782-47-28'],
    description: 'Дзвоніть з 9:00 до 18:00',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['driveclub.cspv@gmail.com'],
    description: 'Відповідаємо протягом 24 годин',
  },
  {
    icon: MapPin,
    title: 'Адреса',
    details: ['вул. Велика Васильківська, 55А, Київ'],
    description: 'Центр міста, зручне розташування',
  },
  {
    icon: Clock,
    title: 'Графік роботи',
    details: ['Пн-Пт: 7:00 - 19:00', 'Сб: 7:00 - 17:00'],
    description: 'Неділя - вихідний',
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get('firstName') || ''),
      lastName: String(fd.get('lastName') || ''),
      phone: String(fd.get('phone') || ''),
      email: String(fd.get('email') || ''),
      course: String(fd.get('course') || ''),
      message: String(fd.get('message') || ''),
    };

    try {
      const res = await fetch('/api/notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Помилка надсилання');
      }

      form.reset();
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setError((err as Error).message ?? 'Сталася помилка');
    } finally {
      // small delay for nicer UX
      setTimeout(() => setStatus('idle'), 5000);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Контакти
            </h1>
            <p className="text-xl text-orange-100">
              Зв&#39;яжіться з нами для отримання консультації або запису на
              курси
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Як з нами зв&#39;язатись
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {item.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="font-semibold text-foreground text-pretty wrap-break-word"
                        >
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-muted-foreground mt-2 text-pretty wrap-break-word">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Залишити заявку</CardTitle>
                <p className="text-muted-foreground">
                  Заповніть форму і ми зв&#39;яжемось з вами найближчим часом
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium mb-2"
                      >
                        Ім&#39;я *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Ваше ім'я"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium mb-2"
                      >
                        Прізвище *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Ваше прізвище"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Телефон *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+38 (0XX) XXX-XX-XX"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="course"
                      className="block text-sm font-medium mb-2"
                    >
                      Цікавий курс
                    </label>
                    <select
                      id="course"
                      name="course"
                      className="w-full p-3 border border-input bg-background rounded-md"
                    >
                      <option value="">Оберіть курс</option>
                      <option value="Для новачків">Для новачків</option>
                      <option value="Для досвідчених водіїв">
                        Для досвідчених водіїв
                      </option>
                      <option value="Спеціальна підготовка">
                        Спеціальна підготовка
                      </option>
                      <option value="Подарунковий сертифікат">
                        Подарунковий сертифікат
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Повідомлення
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Розкажіть про ваші потреби та побажання..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    {status === 'loading' ? 'Відправка…' : 'Відправити заявку'}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Обов&#39;язкові поля для заповнення
                  </p>

                  {status === 'success' && (
                    <p className="text-center text-green-600">
                      Заявку надіслано! Ми зв&apos;яжемось з вами.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-center text-red-600">
                      Не вдалося надіслати: {error}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Як нас знайти</h2>
          <div className="relative aspect-auto lg:aspect-video min-h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.3709260492597!2d30.515767977119193!3d50.432237971588734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf02b2e20f15%3A0xdb19e1dac7cb6a9c!2z0YPQuy4g0JHQvtC70YzRiNCw0Y8g0JLQsNGB0LjQu9GM0LrQvtCy0YHQutCw0Y8sIDU10JAsINCa0LjQtdCyLCDQmtC40LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAwMzE1MA!5e1!3m2!1sru!2sua!4v1755353223603!5m2!1sru!2sua"
              className="absolute inset-0 h-full w-full rounded-lg border-0 opacity-0 translate-y-2
               transition-all duration-500 ease-out
               data-[loaded=true]:opacity-100 data-[loaded=true]:translate-y-0 data-[loaded=true]:border-2 data-[loaded=true]:border-primary
               dark:brightness-90 dark:contrast-110"
              allowFullScreen
              loading="lazy"
              onLoad={(e) =>
                e.currentTarget.setAttribute('data-loaded', 'true')
              }
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта — вул. Велика Васильківська, 55А, Київ"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
