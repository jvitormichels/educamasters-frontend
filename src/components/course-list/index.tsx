import { SimpleGrid } from '@chakra-ui/react';
import { ExistentCourse } from '../../types/course';
import CourseCard from './CourseCard';

interface CourseListProps {
  courses: ExistentCourse[];
  variant?: "admin" | "default";
  getCourses?: () => void;
}

function CourseList({ courses, variant = 'default', getCourses }: CourseListProps) {
  return (
    <SimpleGrid
      gap={8}
      columns={[1, 1, 2, 4]}
      pt={[4, 4, 0, 0]}
      px={[4, 8, 8]}
    >
      {courses.map((course) => (
        <CourseCard getCourses={getCourses} variant={variant} key={course.id} course={course} />
      ))}
    </SimpleGrid>
  )
}

export default CourseList;