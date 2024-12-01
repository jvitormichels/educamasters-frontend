import apiClient from ".";
import { CourseResponse } from "@/types/course";

export const fetchCourses = async (): Promise<CourseResponse> => {
  const response = await apiClient.get<CourseResponse>("/courses");
  return response.data;
};