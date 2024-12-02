import { Meta } from "@/types/course";
import { HStack } from "@chakra-ui/react"
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../ui/pagination"

interface PaginationProps {
  meta: Meta;
  pageSize: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ meta, pageSize, setCurrentPage }) => {
  const handlePageChange = (details: { page: number }) => {
    setCurrentPage(details.page);
  };

  console.log(meta)
  return (
    <PaginationRoot
      mb={10}
      size={["sm", "md", "xs"]}
      variant="solid"
      count={meta.total_count}
      pageSize={pageSize}
      defaultPage={1}
      onPageChange={handlePageChange}
      siblingCount={0}
    >
      <HStack gap={[2, 4, 6]} wrap="wrap" justify="center">
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  )
}

export default Pagination;