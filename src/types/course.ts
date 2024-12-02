export interface Meta {
  total_count: number;
  total_pages: number;
  current_page: number;
  next_page: number | null;
  prev_page: number | null;
}

export interface Course {
  id: number;
  name: string;
  description: string;
  end_date: string;
  thumbnail: string;
}

export interface CourseResponse {
  meta: Meta;
  courses: Course[];
}
