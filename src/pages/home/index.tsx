import { useEffect, useState } from 'react';
import './styles.css';
import { fetchCourses } from '../../services/courseService';
import { Course, Meta } from '@/types/course';
import CourseList from '../../components/course-list';
import Pagination from '../../components/pagination/Pagination';
import { Box } from '@chakra-ui/react';

function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [metadata, setMetadata] = useState<Meta>({
    total_count: 0,
    total_pages: 1,
    current_page: 1,
    next_page: null,
    prev_page: null,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 1;

  useEffect(() => {
    fetchCourses(currentPage, pageSize).then((data) => {
      setCourses(data.courses);
      setMetadata(data.meta);
    });
  }, [currentPage]);

  return (
    <>
      <header className="App-header">
        <h1>Courses</h1>
        <CourseList courses={courses} />
        <Box mt={4}>
          <Pagination meta={metadata} pageSize={pageSize} setCurrentPage={setCurrentPage}/>
        </Box>
      </header>
    </>
  );
}

export default Home;
