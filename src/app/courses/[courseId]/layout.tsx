import type React from 'react';
import type { Metadata } from 'next';
import { COURSES_LIST } from '@/constant/courses/COURSES_LIST.constant';

export async function generateStaticParams() {
  return COURSES_LIST.map((course) => ({
    courseId: course.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ courseId: string }>;
}): Promise<Metadata> {
  const { courseId } = await params;

  const course = COURSES_LIST.find((c) => c.id === courseId);

  if (!course) {
    return {
      title: 'Курс не знайдено - Drive Club',
    };
  }

  return {
    title: course.seo.metaTitle,
    description: course.seo.metaDescription,
    keywords: course.seo.keywords,
    openGraph: {
      title: course.seo.metaTitle,
      description: course.seo.metaDescription,
    },
    twitter: {
      title: course.seo.metaTitle,
      description: course.seo.metaDescription,
    },
  };
}

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
