import apiClient from ".";
import { CourseResponse } from "@/types/course";

export const fetchCourses = async (page = 1, per_page = 10): Promise<CourseResponse> => {
  const params = { page, per_page };
  const response = await apiClient.get<CourseResponse>("/courses", { params });
  return response.data;
};