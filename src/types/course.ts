export interface Meta {
  total_count: number;
  total_pages: number;
  current_page: number;
  next_page: number | null;
  prev_page: number | null;
}

export interface ExistentCourse {
  id: number;
  name: string;
  description: string;
  end_date: string;
  thumbnail: string;
}

export interface CourseList {
  meta: Meta;
  courses: ExistentCourse[];
}

export interface NewCourse {
  name: string;
  description: string;
  end_date: string;
  thumbnail: File | null;
}