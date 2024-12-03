import apiClient from ".";
import { ExistentCourse, NewCourse, CourseList } from "@/types/course";

export const fetchCourses = async (query = "", page = 1, per_page = 10): Promise<CourseList> => {
  const params = { query, page, per_page };
  const response = await apiClient.get<CourseList>("/courses", { params });
  return response.data;
};

// export const fetchCourse = async (id: number): Promise<ExistentCourse> => {
//   const response = await apiClient.get<ExistentCourse>(`/courses/${id}`);
//   return response.data;
// };

export const createCourse = async (courseData: NewCourse): Promise<ExistentCourse> => {
  const params = { "course": courseData }
  const response = await apiClient.post<ExistentCourse>(`/courses`, params);
  return response.data;
};

// export const updateCourse = async (id: number, courseData: ExistentCourse): Promise<ExistentCourse> => {
//   const params = { "course": courseData }
//   const response = await apiClient.post<ExistentCourse>(`/courses/${id}`, params);
//   return response.data;
// };