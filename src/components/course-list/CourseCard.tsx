import { Card } from "@chakra-ui/react"
import { Course } from "@/types/course"

import { Image } from "@chakra-ui/react"

const CourseCard = (course: Course) => {
  return (
    <Card.Root maxW="sm" overflow="hidden" height={360}>
      <Image
        src="https://stellantis3.dam-broadcast.com/medias/domain12808/media107154/2146345-gschtp5of0-whr.jpg"
        alt={ course.name }
      />
      <Card.Body gap="2">
        <Card.Title lineClamp={2}>{ course.name }</Card.Title>
      </Card.Body>
    </Card.Root>
  )
}

export default CourseCard;