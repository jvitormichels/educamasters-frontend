import { useEffect, useState } from 'react';
import './styles.css';
import { fetchCourses } from '../../services/courseService';
import { Course, Meta } from '@/types/course';
import CourseList from '../../components/course-list';
import Pagination from '../../components/pagination/Pagination';
import { Box } from '@chakra-ui/react';
import SearchBar from '../../components/searchbar/SearchBar';

function Home() {
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
    <>
      <header className="App-header">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CourseList courses={courses} />
        <Box mt={4} px={[2, 4, 6]}>
          <Pagination meta={metadata} pageSize={pageSize} setCurrentPage={setCurrentPage}/>
        </Box>
      </header>
    </>
  );
}

export default Home;
