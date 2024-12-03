export interface Meta {
  total_count: number;
  total_pages: number;
  current_page: number;
  next_page: number | null;
  prev_page: number | null;
}

export interface BaseCourse {
  name: string;
  description: string;
  end_date: string;
  thumbnail: string | File | null;
}

export interface ExistentCourse extends BaseCourse {
  id: number;
  pages: ExistentCoursePage[];
}

export interface BaseCoursePage {
  course_id: number;
  title: string;
  video: File | string | null;
}

export interface ExistentCoursePage extends BaseCoursePage {
  id: number;
  position: number;
}

export interface CourseList {
  meta: Meta;
  courses: ExistentCourse[];
}