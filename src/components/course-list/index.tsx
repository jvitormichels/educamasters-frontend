import { SimpleGrid } from '@chakra-ui/react';
import { Course } from '../../types/course';
import CourseCard from './CourseCard';

interface CourseListProps {
  courses: Course[];
  variant?: "admin" | "default";
}

function CourseList({ courses, variant = 'default' }: CourseListProps) {
  return (
    <SimpleGrid
      gap={8}
      columns={[1, 1, 2, 4]}
      pt={[4, 4, 0, 0]}
      px={[4, 8, 8]}
    >
      {courses.map((course) => (
        <CourseCard variant={variant} key={course.id} course={course} />
      ))}
    </SimpleGrid>
  )
}

export default CourseList;