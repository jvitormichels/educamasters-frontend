import { Button, Fieldset, Input, Stack, VStack } from "@chakra-ui/react"
import { Field } from "../ui/field"
import { BaseCoursePage } from "@/types/course";
import FileUploadButton from "../file-upload-button/FileUploadButton";
import React from "react";
import { createCoursePage } from "../../services/coursePagesService";
import { toaster } from "../ui/toaster";

interface CreateCoursePageFormProps {
  courseId: string;
}

const CreateCourseForm: React.FC<CreateCoursePageFormProps> = ({ courseId }) => {
  const [pageData, setPageData] = React.useState<BaseCoursePage>({
    course_id: Number(courseId),
    title: "",
    video: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPageData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleVideoChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
    
    setPageData((prevPageData: BaseCoursePage) => ({
      ...prevPageData,
      video: target.files[0]
    }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    createCoursePage(pageData).then(() => {
      toaster.create({
        title: "Página criada com sucesso!",
        type: "success",
      })
    })
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset.Root>
        <VStack gap={8}>
          <Fieldset.Content>
            <Stack
              gap={[4, 4, 8, 8]}
              align="center"
              justify={"center"}
              direction={"column"}
              pt={[4, 4, 0, 0]}
            >
              {/* <Box>
                <Stack gap={2}> */}
                  <Field label="Título">
                    <Input required variant={"subtle"} name="title" onChange={handleChange} />
                  </Field>

                  <Field label="Vídeo">
                    <FileUploadButton text="video" handleThumbnailChange={handleVideoChange} />
                  </Field>
                {/* </Stack>
              </Box> */}
            </Stack>
          </Fieldset.Content>

          <Button type="submit" alignSelf="flex-start">
            Salvar
          </Button>
        </VStack>
      </Fieldset.Root>
    </form>
  )
}

export default CreateCourseForm;