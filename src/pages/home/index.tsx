import { useEffect, useState } from 'react';
import './styles.css';
import { fetchCourses } from '../../services/courseService';
import { Course } from '@/types/course';
import CourseList from '../../components/course-list';

function Home() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetchCourses().then((data) => {
      setCourses(data.courses);
    });
  }, []);

  return (
    <>
      <header className="App-header">
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </header>
    </>
  );
}

export default Home;
