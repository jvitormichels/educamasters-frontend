interface FileUploadButtonProps {
  handleThumbnailChange: (data: any) => void;
}

const FileUploadButton = ({ handleThumbnailChange }: FileUploadButtonProps) => {
  return (
    <>
      <input type="file" name="thumbnail" onChange={handleThumbnailChange} />
    </>
  )
}

export default FileUploadButton;