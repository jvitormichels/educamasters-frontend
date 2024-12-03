import { ActiveAndExpiredStorage, TopCourseList } from "@/types/dashboard";
import apiClient from ".";

export const fetchExpiredAndActiveStorage = async (): Promise<ActiveAndExpiredStorage> => {
  const response = await apiClient.get<ActiveAndExpiredStorage>("/dashboard/expired_and_active_courses_storage");
  return response.data;
};

export const fetchTopCourses = async (): Promise<TopCourseList> => {
  const response = await apiClient.get("/dashboard/top_courses");
  return response.data;
}