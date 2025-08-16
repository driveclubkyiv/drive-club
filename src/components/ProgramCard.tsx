'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Gift, Star, ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  id: string;
  title: string;
  blurb: string;
  priceFrom: number;
  href: string;
  img: string;
  duration?: string;
  featured?: boolean;
  isGift?: boolean;
  index?: number;
}

export function ProgramCard({
  id,
  title,
  blurb,
  priceFrom,
  href,
  img,
  duration,
  featured = false,
  isGift = false,
  index = 0,
}: ProgramCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.4, ease: 'easeOut' } }}
      className="h-full"
    >
      <Card
        className={`group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-white h-full flex flex-col ${
          featured ? 'ring-2 ring-orange-500 ring-offset-4' : ''
        }`}
      >
        <CardHeader className="p-0 relative">
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full h-full"
            >
              <Image
                src={img || '/placeholder.svg'}
                alt={title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute top-4 right-4 flex flex-col gap-2">
              {featured && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                    <Star className="h-3 w-3 mr-1" />
                    Популярний
                  </Badge>
                </motion.div>
              )}
              {isGift && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg">
                    <Gift className="h-3 w-3 mr-1" />
                    Подарунок
                  </Badge>
                </motion.div>
              )}
            </div>

            <motion.div
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 transform-gpu transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:transform-none"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Від</span>
                  <span className="text-lg font-bold text-orange-600">
                    {priceFrom.toLocaleString('uk-UA')} ₴
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </CardHeader>

        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="space-y-4 flex-1">
            <div className="flex-1">
              <motion.h3
                whileHover={{ color: '#ea580c' }}
                transition={{ duration: 0.4 }}
                className="font-bold text-xl leading-tight text-gray-900 mb-2"
              >
                {title}
              </motion.h3>
              <p className="text-gray-600 line-clamp-3 leading-relaxed">
                {blurb}
              </p>
            </div>

            {duration && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2 mt-auto"
              >
                <Clock className="h-4 w-4 text-orange-500" />
                <span>Тривалість: {duration}</span>
              </motion.div>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 mt-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Button
              asChild
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
            >
              <Link
                href={href}
                className="flex items-center justify-center gap-2"
              >
                Детальніше
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
