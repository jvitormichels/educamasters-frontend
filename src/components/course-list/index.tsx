import { SimpleGrid } from '@chakra-ui/react';
import { Course } from '../../types/course';
import CourseCard from './CourseCard';

interface CourseListProps {
  courses: Course[];
}

function CourseList({ courses }: CourseListProps) {
  return (
    <SimpleGrid
      gap={8}
      columns={[1, 1, 2, 4]}
      pt={[4, 4, 0, 0]}
      px={[4, 8, 0]}
    >
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </SimpleGrid>
  )
}

export default CourseList;