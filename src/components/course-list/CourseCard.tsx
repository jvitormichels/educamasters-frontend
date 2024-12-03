import { Card } from "@chakra-ui/react"
import { Course } from "@/types/course"
import { Button } from "../../components/ui/button"
import { Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

interface CourseCardProps {
  course: Course;
  variant: "admin" | "default";
}

const CourseCard: React.FC<CourseCardProps> = ({ course, variant }) => {
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
      { variant === "admin" && (
        <Card.Footer justifyContent="center">
          <Link to={`/administration/courses/${ course.id }`}>
            <Button variant="outline">Editar</Button>
          </Link>
        </Card.Footer>
      )}
    </Card.Root>
  )
}

export default CourseCard;