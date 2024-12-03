import { Button } from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import CreateCoursePageForm from "./CreateCoursePageForm";

interface CreateCoursePageDialogProps {
  courseId: string;
}

const CreateCoursePageDialog: React.FC<CreateCoursePageDialogProps> = ({ courseId }) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="solid" size="sm">
          Criar nova página
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova página</DialogTitle>
          <h4>Favor pressionar F5 após criar a página (problema técnicos)</h4>
        </DialogHeader>
        <DialogBody>
          <CreateCoursePageForm courseId={courseId} />
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}

export default CreateCoursePageDialog;