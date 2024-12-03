import { ExistentCoursePage } from "@/types/course";
import { Box, VStack } from "@chakra-ui/react";
import EditPage from "./PageItem";

interface CoursePagesContainerProps {
  coursePages: ExistentCoursePage[];
}

const CoursePagesContainer: React.FC<CoursePagesContainerProps> = ({ coursePages }) => {
  return (
    <Box backgroundColor={"#18181a"}>
      <VStack>
        {coursePages?.map((page, index) => (
          <EditPage key={page.id} index={index} page={page} />
        ))}
      </VStack>
    </Box>
  )
}

export default CoursePagesContainer;