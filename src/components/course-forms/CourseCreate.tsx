import { BaseCourse } from "@/types/course";
import CourseForm from "./CourseForm";
import { createCourse } from "../../services/courseService";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { toaster } from "../ui/toaster";

const CourseCreate = () => {
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState<BaseCourse>({
    name: "",
    description: "",
    end_date: "",
    thumbnail: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    createCourse(courseData).then((data) => {
      toaster.create({
        title: "Curso criado com sucesso!",
        type: "success"
      })
      navigate(`/administration/courses/${data.id}`);
    })
    e.preventDefault();
  }
  
  return (
    <CourseForm courseData={courseData} setCourseData={setCourseData} handleSubmit={handleSubmit} variant="create"/>
  )
}

export default CourseCreate;