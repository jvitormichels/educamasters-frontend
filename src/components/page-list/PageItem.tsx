import { deleteCoursePage } from "../../services/coursePagesService";
import { ExistentCoursePage } from "@/types/course";
import { Button, Stack, Text } from "@chakra-ui/react";
import { toaster } from "../ui/toaster";
import { useState } from "react";

interface EditPageProps {
  page: ExistentCoursePage;
  index: number;
}

const EditPage: React.FC<EditPageProps> = ({ page, index }) => {
  const [shouldRender, setShouldRender] = useState(true);
  index = index + 1

  const handleDelete = () => {
    deleteCoursePage(page.course_id, page.id).then(() => {
      toaster.create({
        title: "Página deletada com sucesso!",
        type: "success",
      })
      setShouldRender(false);
    })
  }
  
  return shouldRender ? (
    <Stack
        gap={8}
        align="center"
        justify="space-between"
        direction="row"
      >
        <Text fontSize={"xl"}>{index}. {page.title}</Text>
        <Button onClick={ handleDelete } variant="solid">
          Excluir
        </Button>
    </Stack>
  ) : null;
}

export default EditPage;