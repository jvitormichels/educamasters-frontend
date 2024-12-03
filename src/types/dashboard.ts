export interface ActiveAndExpiredStorage {
  active_course_storage: number;
  expired_course_storage: number;
}

export interface CourseInfo {
  id: number;
  name: string;
  storage: number;
}

export interface TopCourseList {
  courses: CourseInfo[];
}