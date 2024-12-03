import CourseEdit from "../../components/course-forms/CourseEdit";
import { fetchCourse, updateCourse } from "../../services/courseService";
import { ExistentCourse } from "@/types/course";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditCoursePage() {
  const { id } = useParams();

  const [courseData, setCourseData] = useState<ExistentCourse>({
    id: 0,
    name: "",
    description: "",
    end_date: "",
    thumbnail: ""
  });

  useEffect(() => {
    fetchCourse(Number(id)).then((data) => {
      setCourseData(data);
    });
  }, []);

  return (
    <CourseEdit courseData={courseData} setCourseData={setCourseData} courseId={id} />
  );
}

export default EditCoursePage;