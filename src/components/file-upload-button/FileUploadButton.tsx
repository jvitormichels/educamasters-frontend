import { Button } from "../ui/button"
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "../ui/file-upload"
import { HiUpload } from "react-icons/hi"

interface FileUploadButtonProps {
  text: string;
  handleThumbnailChange: (data: any) => void;
}

const FileUploadButton = ({ text = "Arquivo", handleThumbnailChange }: FileUploadButtonProps) => {
  return (
    <FileUploadRoot onChange={handleThumbnailChange}>
      <FileUploadTrigger asChild>
        <Button variant="outline" size="sm">
          <HiUpload />{ text }
        </Button>
      </FileUploadTrigger>
      <FileUploadList />
    </FileUploadRoot>
  )
}

export default FileUploadButton;