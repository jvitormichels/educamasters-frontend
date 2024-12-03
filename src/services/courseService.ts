import apiClient from ".";
import { ExistentCourse, BaseCourse, CourseList } from "@/types/course";

export const fetchCourses = async (query = "", page = 1, per_page = 10, include_expired: boolean): Promise<CourseList> => {
  const params = { query, page, per_page, include_expired };
  const response = await apiClient.get<CourseList>("/courses", { params });
  return response.data;
};

export const fetchCourse = async (id: number): Promise<ExistentCourse> => {
  const response = await apiClient.get<ExistentCourse>(`/courses/${id}`);
  return response.data;
};

export const createCourse = async (courseData: BaseCourse): Promise<ExistentCourse> => {
  const params = { "course": courseData }
  const response = await apiClient.post<ExistentCourse>(`/courses`, params);
  return response.data;
};

export const updateCourse = async (id: number, courseData: ExistentCourse): Promise<ExistentCourse> => {
  const params = { "course": courseData }
  const response = await apiClient.patch<ExistentCourse>(`/courses/${id}`, params);
  return response.data;
};

export const deleteCourse = async (id: number): Promise<void> => {
  console.log(id)
  const response = await apiClient.delete(`/courses/${id}`);
  return response.data;
}