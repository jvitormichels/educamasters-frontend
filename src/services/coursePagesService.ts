import { BaseCoursePage } from "@/types/course";
import apiClient from ".";

export const createCoursePage = async (pageData: BaseCoursePage) => {
  const params = { page: pageData };
  const response = await apiClient.post(`/courses/${pageData.course_id}/course_pages`, params);
  return response.data;
}

export const deleteCoursePage = async (course_id: number, page_id: number) => {
  const params = { course_id, page_id };
  const response = await apiClient.delete(`/courses/${course_id}/course_pages/${page_id}`, { params });
  return response.data;
};