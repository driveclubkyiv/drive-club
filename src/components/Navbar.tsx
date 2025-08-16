'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navigationItems = [
  { name: 'Головна', href: '/' },
  { name: 'Програми', href: '/courses' },
  { name: 'Тренажери', href: '/exercise-machines' },
  { name: 'Захисне водіння', href: '/safe-drive' },
  { name: 'Контакти', href: '/contact' },
  { name: 'Про нас', href: '/about-us' },
];

const phoneNumbers = [
  { number: '0639806051', display: '(063) 980-60-51' },
  { number: '0667824728', display: '(066) 782-47-28' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <div className="mx-auto px-4 pt-2">
          <div
            className={cn(
              'relative overflow-hidden rounded-2xl transition-all duration-500 ease-out',
              scrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-2xl border border-white/20'
                : 'bg-white/80 backdrop-blur-lg shadow-xl border border-white/10'
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-orange-500/5" />

            <div className="relative flex h-16 items-center justify-between px-4 sm:px-6">
              <Link
                href="/"
                className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0"
              >
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={70}
                    height={70}
                    className="group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/*<Car className="h-4 w-4 sm:h-5 sm:w-5 text-white" />*/}
                  {/*<Zap className="absolute -top-1 -right-1 h-2 w-2 sm:h-3 sm:w-3 text-yellow-300 animate-pulse" />*/}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300 truncate">
                    Drive Club
                  </span>
                  <span className="text-xs text-gray-500 hidden sm:block font-medium truncate">
                    Центр підготовки водіїв
                  </span>
                </div>
              </Link>

              <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/50 whitespace-nowrap',
                      pathname === item.href
                        ? 'text-orange-600 bg-orange-50/80'
                        : 'text-gray-700 hover:text-orange-600'
                    )}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full" />
                    )}
                  </Link>
                ))}
              </nav>

              <div className="hidden lg:flex items-center flex-shrink-0">
                <Link href="/contact">
                  <Button className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-4 lg:px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm whitespace-nowrap">
                    <span className="relative z-10">Записатися</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </Link>
              </div>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden flex-shrink-0">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-xl hover:bg-white/50"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Відкрити меню</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] bg-white/95 backdrop-blur-xl border-l border-white/20 rounded-lg p-2 overflow-y-auto"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-100">
                      <SheetTitle className="font-bold text-lg text-gray-900">
                        <div className="font-bold text-lg text-gray-900">
                          Drive Club
                        </div>
                        <div className="text-xs text-gray-500">
                          Центр підготовки водіїв
                        </div>
                      </SheetTitle>
                    </div>

                    <nav className="flex flex-col space-y-2 flex-1">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                            pathname === item.href
                              ? 'bg-orange-50 text-orange-600'
                              : 'text-gray-700 hover:bg-gray-50'
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>

                    <div className="border-t border-gray-100 pt-6 mt-6">
                      <div className="text-sm font-semibold text-gray-900 mb-4">
                        Зв&#39;яжіться з нами:
                      </div>
                      <div className="space-y-3 mb-6">
                        {phoneNumbers.map((phone) => (
                          <a
                            key={phone.number}
                            href={`tel:${phone.number}`}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                          >
                            <Phone className="h-4 w-4 text-orange-600" />
                            <span className="font-medium text-gray-900">
                              {phone.display}
                            </span>
                          </a>
                        ))}
                      </div>
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                          Записатися на курс
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <div className="h-20" />
    </>
  );
}
