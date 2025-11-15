import { Box, Pagination } from '@mui/material';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationBlock = ({ currentPage, totalPages, onPageChange }: Props) => {
  return (
    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => onPageChange(page)}
        color="primary"
      />
    </Box>
  );
};
