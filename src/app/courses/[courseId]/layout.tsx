import type React from 'react';
import type { Metadata } from 'next';
import { COURSES_LIST } from '@/constant/courses/COURSES_LIST.constant';

interface CourseLayoutProps {
  children: React.ReactNode;
  params: {
    courseId: string;
  };
}

export async function generateStaticParams() {
  return COURSES_LIST.map((course) => ({
    courseId: course.id,
  }));
}

export async function generateMetadata({
  params,
}: CourseLayoutProps): Promise<Metadata> {
  const course = COURSES_LIST.find((c) => c.id === params.courseId);

  if (!course) {
    return {
      title: 'Курс не знайдено - Drive Club',
    };
  }

  return {
    title: course.seo.metaTitle,
    description: course.seo.metaDescription,
    keywords: course.seo.keywords,
  };
}

export default function CourseLayout({ children }: CourseLayoutProps) {
  return <>{children}</>;
}
