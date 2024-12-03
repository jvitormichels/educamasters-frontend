import { Button, Fieldset, Input, Stack, VStack } from "@chakra-ui/react"
import { Field } from "../ui/field"
import { ExistentCourse, BaseCourse } from "@/types/course";
import FileUploadButton from "../file-upload-button/FileUploadButton";
import React from "react";
import { chakra, useRecipe } from "@chakra-ui/react"
import AutoResize from "react-textarea-autosize"

const StyledAutoResize = chakra(AutoResize)

interface CourseFormProps {
  courseData: BaseCourse | ExistentCourse;
  setCourseData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
  variant: "create" | "edit";
}

const CourseForm = ({ courseData, setCourseData, handleSubmit, variant }: CourseFormProps) => {
  const recipe = useRecipe({ key: "textarea" })
  const styles = recipe({ size: "sm" })

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
            {variant === "create" ? "Criar novo curso" : "Editar curso"}
          </Fieldset.Legend>
          <Fieldset.HelperText>
            Insira abaixo os detalhes gerais
          </Fieldset.HelperText>
        </Stack>

        <VStack
          gap={10}
          align="center"
        >
          <Fieldset.Content>
            <Field label="Nome do curso">
              <Input required variant={"subtle"} name="name" value={ courseData.name } onChange={handleChange} />
            </Field>

            <Field label="Descrição">
              <StyledAutoResize
                name="description"
                value={ courseData.description }
                onChange={(e) => {handleChange(e as any)}}
                minH="initial"
                resize="none"
                overflow="hidden"
                lineHeight="inherit"
                css={styles}
                backgroundColor={"#18181a"}
              />
            </Field>

            <Field label="Data de vencimento">
              <Input required variant={"subtle"} name="end_date" type="date" value={ courseData.end_date } onChange={handleChange} />
            </Field>

            <Field label="Thumbnail">
              <FileUploadButton text="Imagem" handleThumbnailChange={handleThumbnailChange} />
            </Field>
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