import { Button, Card, Stack } from '@mui/material';
import { useState } from 'react';

import { adsService } from '../../api/ads.service';
import type { Advertisement, ModerationPayload } from '../../types';
import { RejectModal } from '../RejectModal/RejectModal';

interface AdActionsProps {
  ad: Advertisement;
  reload: () => void;
}

export const AdActions = ({ ad, reload }: AdActionsProps) => {
  const [rejectOpen, setRejectOpen] = useState(false);
  const [changesOpen, setChangesOpen] = useState(false);

  const approve = async () => {
    await adsService.approveAd(ad.id);
    reload();
  };

  return (
    <Card sx={{ p: 2 }}>
      <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
        <Button color="success" variant="contained" onClick={approve} sx={{ flex: 1 }}>
          ✓ Одобрить
        </Button>

        <Button
          color="error"
          variant="contained"
          onClick={() => setRejectOpen(true)}
          sx={{ flex: 1 }}
        >
          ✗ Отклонить
        </Button>

        <Button
          color="warning"
          variant="contained"
          onClick={() => setChangesOpen(true)}
          sx={{ flex: 1 }}
        >
          ↺ Доработка
        </Button>
      </Stack>

      <RejectModal
        open={rejectOpen}
        mode="reject"
        onClose={() => setRejectOpen(false)}
        onSubmit={async (payload: ModerationPayload) => {
          await adsService.rejectAd(ad.id, payload);
          reload();
        }}
      />

      <RejectModal
        open={changesOpen}
        mode="changes"
        onClose={() => setChangesOpen(false)}
        onSubmit={async (payload: ModerationPayload) => {
          await adsService.requestChangesAd(ad.id, payload);
          reload();
        }}
      />
    </Card>
  );
};
