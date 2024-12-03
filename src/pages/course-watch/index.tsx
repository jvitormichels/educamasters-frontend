import { fetchCourse } from "../../services/courseService";
import { ExistentCourse, ExistentCoursePage } from "@/types/course";
import { Box, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactPlayer from 'react-player';
import CoursePagesContainer from "../../components/page-list/CoursePagesContainer";

const CourseWatchPage = () => {
  const id = useParams().id;
  const [course, setCourse] = useState<ExistentCourse | null>(null);
  const [pages, setPages] = useState<ExistentCoursePage[]>([]);
  const [currentPage, setCurrentPage] = useState<ExistentCoursePage | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    fetchCourse(Number(id)).then((data: ExistentCourse) => {
      setCourse(data);
      setPages(data.pages);
      setCurrentPage(data.pages[0]);
    })
  }, []);

  const setNextPage = () => {
    if (currentPageIndex + 1 < pages.length) {
      setCurrentPageIndex(currentPageIndex + 1);
      setCurrentPage(pages[currentPageIndex + 1]);
    }
  }

  return (
    <Box className="App-header">
      <h1>{ course?.name }</h1>
      <Stack
        gap={8}
        align="center"
        justify={["center"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Box width={["90vw", "90vw", "70vw"]} >
          <ReactPlayer
            url={currentPage?.video}
            width="100%"
            controls
            playing
            onEnded={setNextPage}
          />
        </Box>
        <Box width={["90vw", "90vw", "25vw"]} >
          <CoursePagesContainer coursePages={pages} setCurrentPage={setCurrentPage} />
        </Box>
      </Stack>
      <Text mt={4} px={[2, 4, 6]}>
        {course?.description}
      </Text>
    </Box>
  )
}


export default CourseWatchPage;