import { deleteCoursePage } from "../../services/coursePagesService";
import { ExistentCoursePage } from "@/types/course";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { toaster } from "../ui/toaster";
import { useState } from "react";

interface PageItemProps {
  page: ExistentCoursePage;
  index: number;
  variant: "admin" | "default";
  setCurrentPage?: (page: ExistentCoursePage) => void;
}

const PageItem: React.FC<PageItemProps> = ({ page, index, variant, setCurrentPage }) => {
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

  const handleClick = () => {
    setCurrentPage && setCurrentPage(page);
  }
  
  return shouldRender ? (
    <Stack
        gap={8}
        align="center"
        justify="space-between"
        direction="row"
      >
        <Text fontSize={"xl"}>{index}. {page.title}</Text>
        {variant === "admin" ?
          <Button onClick={ handleDelete } variant="solid">
            Excluir
          </Button>
        : 
          <Button onClick={ handleClick } variant="solid">
            Assistir
          </Button>
        }
    </Stack>
  ) : null;
}

export default PageItem;