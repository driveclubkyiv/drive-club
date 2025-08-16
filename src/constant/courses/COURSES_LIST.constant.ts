import { Course } from '@/types/Course.type';
import { NOVICE_COURSE } from '@/constant/courses/courses_list/NOVICE_COURSE.constants';
import { ADVANCED_COURSE } from '@/constant/courses/courses_list/ADVANCED_COURSE.constants';
import { SPECIAL_COURSE } from '@/constant/courses/courses_list/SPECIAL_COURSE.constant';

export const COURSES_LIST: Course[] = [
  NOVICE_COURSE,
  ADVANCED_COURSE,
  SPECIAL_COURSE,
];
