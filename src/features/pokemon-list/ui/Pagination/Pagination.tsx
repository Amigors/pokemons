import { PaginationControls } from "./PaginationControls";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  startIndex,
  endIndex,
  onPageChange,
}: PaginationProps) => (
  <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div className="text-sm text-gray-600">
      Showing {startIndex + 1} to {endIndex} of {totalItems} entries
    </div>
    <PaginationControls
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  </div>
);
