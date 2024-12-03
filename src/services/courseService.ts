import apiClient from ".";
import { Course, CourseCreate, CourseResponse } from "@/types/course";

export const fetchCourses = async (query = "", page = 1, per_page = 10): Promise<CourseResponse> => {
  const params = { query, page, per_page };
  const response = await apiClient.get<CourseResponse>("/courses", { params });
  return response.data;
};

export const createCourse = async (courseData: CourseCreate): Promise<Course> => {
  const params = { "course": courseData }
  const response = await apiClient.post<Course>(`/courses`, params);
  return response.data;
};