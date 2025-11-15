import { Box, Card, Chip, Stack, Typography } from '@mui/material';

import { MODERATION_ACTION_COLORS, MODERATION_ACTION_LABELS } from '../../constants/adLabels';
import type { ModerationHistoryItem } from '../../types';
import { formatDateTime } from '../../utils/formatDateTime';

interface AdModerationHistoryProps {
  history: ModerationHistoryItem[];
}

export const AdModerationHistory = ({ history }: AdModerationHistoryProps) => (
  <Box>
    <Typography variant="h6" sx={{ mb: 1 }}>
      История модерации
    </Typography>

    {!history.length ? (
      <Typography color="text.secondary">История модерации отсутствует</Typography>
    ) : (
      <Stack spacing={2}>
        {history.map((item) => (
          <Card
            key={item.id}
            sx={{
              p: 2,
              border: '1px solid #d9d9d9ff',
              backgroundColor: '#fafafa',
              borderRadius: 2,
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>{item.moderatorName}</Typography>
            <Typography color="text.secondary">{formatDateTime(item.timestamp)}</Typography>

            <Chip
              size="small"
              sx={{ mt: 1 }}
              label={MODERATION_ACTION_LABELS[item.action]}
              color={MODERATION_ACTION_COLORS[item.action]}
            />

            {item.comment && <Typography sx={{ mt: 1 }}>Комментарий: {item.comment}</Typography>}
          </Card>
        ))}
      </Stack>
    )}
  </Box>
);
