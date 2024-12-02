import CourseForm from "../../components/course-forms/CourseForm";
import { useState } from "react";
import { CourseCreate } from "@/types/course";
import { createCourse } from "../../services/courseService";

function CreateCoursePage() {
  const [formData, setFormData] = useState<CourseCreate>({
    name: "",
    description: "",
    end_date: "",
    // thumbnail: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    createCourse(formData).then((data) => {
      console.log(data)
    })
    e.preventDefault();
  }

  return (
    <CourseForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
  );
}

export default CreateCoursePage;