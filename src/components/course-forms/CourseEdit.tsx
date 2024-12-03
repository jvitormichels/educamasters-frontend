import { Box, Stack, VStack } from "@chakra-ui/react";
import { ExistentCourse } from "@/types/course";
import { updateCourse } from "../../services/courseService";
import CourseForm from "./CourseForm";
import { toaster } from "../ui/toaster";
import CoursePagesContainer from "../page-list/CoursePagesContainer";
import React from "react";
import CreateCourseDialog from "../course-page-dialog/CreateCoursePageDialog";

interface EditCoursePageProps {
  courseData: ExistentCourse;
  setCourseData: (data: any) => void;
  courseId: string;
}

const EditCoursePage: React.FC<EditCoursePageProps> = ({ courseData, setCourseData, courseId }) => {
  const handleSubmit = (e: React.FormEvent) => {
    updateCourse(Number(courseId), courseData).then(() => {
      toaster.create({
        title: "Curso atualizado com sucesso!",
        type: "success",
      })
    })
    e.preventDefault();
  }
  
  return (
    <Box className="App-header" padding={20}>
      <Stack
        gap={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <CourseForm courseData={courseData} setCourseData={setCourseData}  handleSubmit={handleSubmit} variant="edit" />
        <VStack gap={5}>
          <CreateCourseDialog courseId={courseId} />
          <CoursePagesContainer coursePages={ courseData.pages }/>
        </VStack>
      </Stack>
    </Box>
  );
}

export default EditCoursePage;