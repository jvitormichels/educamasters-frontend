import { Box, Button, Fieldset, Input, Stack, VStack } from "@chakra-ui/react"
import { Field } from "../ui/field"
import { ExistentCourse, BaseCourse } from "@/types/course";
import FileUploadButton from "../file-upload-button/FileUploadButton";
import React from "react";
import { Textarea } from "@chakra-ui/react"

interface CourseFormProps {
  courseData: BaseCourse | ExistentCourse;
  setCourseData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
  variant: "create" | "edit";
}

const CourseForm = ({ courseData, setCourseData, handleSubmit, variant }: CourseFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCourseData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleThumbnailChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
    
    setCourseData((prevFormData: BaseCourse) => ({
      ...prevFormData,
      thumbnail: target.files[0]
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset.Root>
        <Stack>
          <Fieldset.Legend>
            {variant === "create" ? "Criar novo curso" : "Detalhes do curso"}
          </Fieldset.Legend>
        </Stack>

        <VStack gap={8}>
          <Fieldset.Content>
            <Stack
              gap={[4, 4, 8, 8]}
              align="center"
              justify={["center", "space-between", "flex-end", "flex-end"]}
              direction={["column", "row", "row", "row"]}
              pt={[4, 4, 0, 0]}
            >
              <Box>
                <Stack gap={2}>
                  <Field label="Nome do curso">
                    <Input required variant={"subtle"} name="name" value={ courseData.name } onChange={handleChange} />
                  </Field>

                  <Field label="Data de vencimento">
                    <Input required variant={"subtle"} name="end_date" type="date" value={ courseData.end_date } onChange={handleChange} />
                  </Field>

                  <Field label="Thumbnail">
                    <FileUploadButton text="Imagem" handleThumbnailChange={handleThumbnailChange} />
                  </Field>
                </Stack>
              </Box>

              <Box>
                <Field label="Descrição">
                  <Textarea
                    variant={"subtle"}
                    minH={"13em"}
                    placeholder="XSmall size"
                  />
                </Field>
              </Box>
            </Stack>
          </Fieldset.Content>

          <Button type="submit" alignSelf="flex-start">
            {variant === "create" ? "Criar curso" : "Salvar alterações"}
          </Button>
        </VStack>
      </Fieldset.Root>
    </form>
  )
}

export default CourseForm;