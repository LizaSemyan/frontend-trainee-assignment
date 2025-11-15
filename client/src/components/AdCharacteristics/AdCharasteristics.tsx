import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

interface AdCharacteristicsProps {
  characteristics: Record<string, string>;
}

export const AdCharacteristics = ({ characteristics }: AdCharacteristicsProps) => (
  <Box>
    <Typography variant="h6" sx={{ mb: 1 }}>
      Характеристики
    </Typography>

    <Table
      size="small"
      sx={{
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        '& td': {
          borderBottom: '1px solid #eee',
          padding: '8px 0',
        },
      }}
    >
      <TableBody>
        {Object.entries(characteristics).map(([key, value]) => (
          <TableRow key={key}>
            <TableCell
              align="center"
              sx={{
                width: '50%',
                fontWeight: 500,
                borderRight: '1px solid #eee',
              }}
            >
              {key}
            </TableCell>

            <TableCell
              align="center"
              sx={{
                color: 'text.secondary',
              }}
            >
              {value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Box>
);
