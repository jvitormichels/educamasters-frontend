import { Button, Fieldset, FileUpload, Input, Stack } from "@chakra-ui/react"
import { Field } from "../ui/field"
import { CourseCreate } from "@/types/course";
// import FileUploadButton from "../file-upload-button/FileUploadButton";

interface CourseFormProps {
  formData: CourseCreate;
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const CourseForm = ({ formData, setFormData, handleSubmit }: CourseFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>Criar novo curso</Fieldset.Legend>
          <Fieldset.HelperText>
            Insira abaixo os detalhes gerais
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content>
          <Field label="Nome do curso">
            <Input name="name" value={ formData.name } onChange={handleChange} />
          </Field>

          <Field label="Descrição">
            <Input name="description" type="textarea" value={ formData.description } onChange={handleChange} />
          </Field>

          <Field label="Data de vencimento">
            <Input name="end_date" type="date" value={ formData.end_date } onChange={handleChange} />
          </Field>

          {/* <Field label="Thumbnail">
            <FileUploadButton setFormData={setFormData} text="Thumbnail"/>
          </Field> */}
        </Fieldset.Content>

        <Button type="submit" alignSelf="flex-start">
          Submit
        </Button>
      </Fieldset.Root>
    </form>
  )
}

export default CourseForm;