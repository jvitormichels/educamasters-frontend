import { useEffect, useState } from 'react';
import { fetchCourses } from '../../services/courseService';
import { Course, Meta } from '@/types/course';
import CourseList from '../../components/course-list';
import Pagination from '../../components/pagination/Pagination';
import { Box, Button, Stack } from '@chakra-ui/react';
import SearchBar from '../../components/searchbar/SearchBar';
import { Link } from 'react-router-dom';

function ListCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [metadata, setMetadata] = useState<Meta>({
    total_count: 0,
    total_pages: 1,
    current_page: 1,
    next_page: null,
    prev_page: null,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  useEffect(() => {
    fetchCourses(searchQuery, currentPage, pageSize).then((data) => {
      setCourses(data.courses);
      setMetadata(data.meta);
    });
  }, [currentPage, searchQuery]);

  return (
    <Box className="App-header">
      <Box display={{ base: "block", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
        <Stack
          gap={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Link to="/administration/courses">
            <Button>Novo Curso</Button>
          </Link>
        </Stack>
      </Box>
      <CourseList variant="admin" courses={courses} />
      <Box mt={4} px={[2, 4, 6]}>
        <Pagination meta={metadata} pageSize={pageSize} setCurrentPage={setCurrentPage}/>
      </Box>
    </Box>
  )
}

export default ListCourses;