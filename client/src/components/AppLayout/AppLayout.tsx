import { Box, Container } from '@mui/material';

import { Navbar } from '../Navbar/Navbar';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />

      <Container maxWidth="md" sx={{ py: 2 }}>
        {children}
      </Container>
    </Box>
  );
};
