'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Facebook } from 'lucide-react';

interface SocialLink {
  platform: 'instagram' | 'facebook' | 'tiktok';
  url: string;
}

interface InstructorCardProps {
  name: string;
  title: string;
  description: string[];
  image: string;
  experience: string;
  socialLinks: SocialLink[];
}

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'instagram':
      return <Instagram className="h-5 w-5" />;
    case 'facebook':
      return <Facebook className="h-5 w-5" />;
    case 'tiktok':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      );
    default:
      return null;
  }
};

export function InstructorCard({
  name,
  title,
  description,
  image,
  experience,
  socialLinks,
}: InstructorCardProps) {
  return (
    <motion.div
      // whileHover={{ y: -5, transition: { duration: 0.3 } }}
      // whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative p-2">
            <div className="aspect-[4/3] md:aspect-[3/4] relative overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <Image
                  src={image || '/placeholder.svg'}
                  alt={name}
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
          </div>
          <CardContent className="md:w-2/3 p-8 flex flex-col justify-center">
            <div className="space-y-4">
              <div>
                <motion.h3
                  whileHover={{ color: '#ea580c' }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl font-bold mb-2"
                >
                  {name}
                </motion.h3>
                <p className="text-primary font-semibold text-lg">{title}</p>
                <p className="text-sm text-muted-foreground font-medium">
                  {experience}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg">
                {description.length > 0 &&
                  description.map((item, index: number) => (
                    <span key={index}>
                      {item}
                      <br />
                      <br />
                    </span>
                  ))}
              </p>

              {socialLinks.length > 0 && (
                <div className="flex gap-4 pt-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                        duration: 0.4,
                      }}
                    >
                      <Link
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <SocialIcon platform={social.platform} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}
