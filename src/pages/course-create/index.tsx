import CourseForm from "../../components/course-forms/CourseForm";
import { useState } from "react";
import { NewCourse } from "@/types/course";
import { createCourse } from "../../services/courseService";
import { Box } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function CreateCoursePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<NewCourse>({
    name: "",
    description: "",
    end_date: "",
    thumbnail: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    createCourse(formData).then((data) => {
      navigate(`/administration/courses/${data.id}`);
    })
    e.preventDefault();
  }

  return (
    <Box className="App-header" padding={20}>
      <CourseForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
    </Box>
  );
}

export default CreateCoursePage;