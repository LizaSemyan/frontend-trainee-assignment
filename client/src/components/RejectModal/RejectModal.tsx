import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';

import { MODERATION_REASONS } from '../../constants/moderationReasons';
import type { ModerationPayload, RejectModalMode } from '../../types';

interface RejectModalProps {
  open: boolean;
  mode?: RejectModalMode;
  onClose: () => void;
  onSubmit: (data: ModerationPayload) => void;
}

export const RejectModal = ({ open, mode = 'reject', onClose, onSubmit }: RejectModalProps) => {
  const [reason, setReason] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const send = () => {
    if (!reason) return;
    onSubmit({ reason, comment });
    handleClose();
  };

  const handleClose = () => {
    setReason('');
    setComment('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        {mode === 'reject' ? 'Отклонение объявления' : 'Запросить доработку'}
      </DialogTitle>

      <DialogContent>
        <Stack sx={{ mt: 1 }}>
          {MODERATION_REASONS.map((r) => (
            <FormControlLabel
              key={r}
              control={<Checkbox checked={reason === r} onChange={() => setReason(r)} />}
              label={r}
            />
          ))}

          <TextField
            label="Комментарий (необязательно)"
            multiline
            minRows={2}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button variant="contained" color="error" onClick={send} disabled={!reason}>
          Отправить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
