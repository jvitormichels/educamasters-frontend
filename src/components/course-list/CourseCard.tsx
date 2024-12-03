import { Badge, Card } from "@chakra-ui/react"
import { ExistentCourse } from "@/types/course"
import { Button } from "../../components/ui/button"
import { Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { deleteCourse } from "../../services/courseService"

interface CourseCardProps {
  course: ExistentCourse;
  variant: "admin" | "default";
  getCourses?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, variant, getCourses }) => {
  const placeholderImage = "https://via.placeholder.com/750x422?text=No+Image"

  const handleDelete = async (e: React.FormEvent) => {
    deleteCourse(course.id).then(() => {
      getCourses && getCourses();
    });
    e.preventDefault();
  }

  function formatDate() {
    const date = new Date(course.end_date)
    return new Intl.DateTimeFormat('pt-BR').format(date)
  }

  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={ course.thumbnail || placeholderImage }
        alt={ course.name }
      />
      <Card.Body gap="2">
        <Card.Title lineClamp={2}>{ course.name }</Card.Title>
        <Badge width={"fit-content"}>{ formatDate() }</Badge>
      </Card.Body>
      <Card.Footer justifyContent="center">
        { variant === "admin" && (
          <>
            <Link to={`/administration/courses/${ course.id }`}>
              <Button variant="outline">Editar</Button>
            </Link>
            <form onSubmit={handleDelete}>
              <Button type="submit" variant="solid" colorPalette={"red"}>Deletar</Button>
            </form>
          </>
        )}
        <Link to={`/courses/${ course.id }`}>
          <Button variant="outline">Assistir</Button>
        </Link>
      </Card.Footer>
    </Card.Root>
  )
}

export default CourseCard;