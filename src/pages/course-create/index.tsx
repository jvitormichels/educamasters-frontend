import { Box } from "@chakra-ui/react";
import CourseCreate from "../../components/course-forms/CourseCreate";

function CreateCoursePage() {
  return (
    <Box className="App-header" padding={20}>
      <CourseCreate />
    </Box>
  );
}

export default CreateCoursePage;