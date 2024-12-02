import { Card } from "@chakra-ui/react"
import { Course } from "@/types/course"

import { Image } from "@chakra-ui/react"

const CourseCard = (course: Course) => {
  const placeholderImage = "https://via.placeholder.com/750x422?text=No+Image"

  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={ course.thumbnail || placeholderImage }
        alt={ course.name }
      />
      <Card.Body gap="2">
        <Card.Title lineClamp={2}>{ course.name }</Card.Title>
      </Card.Body>
    </Card.Root>
  )
}

export default CourseCard;