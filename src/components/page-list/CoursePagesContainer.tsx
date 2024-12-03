import { ExistentCoursePage } from "@/types/course";
import { Box, VStack } from "@chakra-ui/react";
import PageItem from "./PageItem";

interface CoursePagesContainerProps {
  coursePages: ExistentCoursePage[];
  variant?: "admin" | "default";
  setCurrentPage?: (page: ExistentCoursePage) => void;
}

const CoursePagesContainer: React.FC<CoursePagesContainerProps> = ({ coursePages, variant = "default", setCurrentPage }) => {
  return (
    <Box backgroundColor={"#18181a"}>
      <VStack>
        {coursePages?.map((page, index) => (
          <PageItem key={page.id} index={index} page={page} variant={variant} setCurrentPage={setCurrentPage} />
        ))}
      </VStack>
    </Box>
  )
}

export default CoursePagesContainer;