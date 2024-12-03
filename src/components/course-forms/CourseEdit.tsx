import { Box } from "@chakra-ui/react";
import CourseCreate from "../../components/course-forms/CourseCreate";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ExistentCourse } from "@/types/course";
import { fetchCourse, updateCourse } from "../../services/courseService";
import CourseForm from "./CourseForm";

interface EditCoursePageProps {
  courseData: ExistentCourse;
  setCourseData: (data: any) => void;
  courseId?: string;
}

const EditCoursePage: React.FC<EditCoursePageProps> = ({ courseData, setCourseData, courseId }) => {
  const handleSubmit = (e: React.FormEvent) => {
    updateCourse(Number(courseId), courseData).then((data) => {
      // mostra um toast bonitinho
    })
    e.preventDefault();
  }
  
  return (
    <Box className="App-header" padding={20}>
      <CourseForm courseData={courseData} setCourseData={setCourseData}  handleSubmit={handleSubmit} variant="edit" />
    </Box>
  );
}

export default EditCoursePage;