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
      size="xs"
      variant="solid"
      count={meta.total_count}
      pageSize={pageSize}
      defaultPage={1}
      onPageChange={handlePageChange}
    >
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  )
}

export default Pagination;