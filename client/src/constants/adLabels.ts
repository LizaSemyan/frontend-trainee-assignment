import type { AdPriority, AdStatus, ModerationAction } from '../types';

export const STATUS_LABELS: Record<AdStatus, string> = {
  pending: 'На модерации',
  approved: 'Одобрено',
  rejected: 'Отклонено',
  draft: 'Черновик',
};

export const PRIORITY_LABELS: Record<AdPriority, string> = {
  normal: 'Обычный',
  urgent: 'Срочный',
};

export const MODERATION_ACTION_LABELS: Record<ModerationAction, string> = {
  approved: 'Одобрено',
  rejected: 'Отклонено',
  requestChanges: 'На доработке',
};

export const MODERATION_ACTION_COLORS: Record<ModerationAction, 'success' | 'error' | 'warning'> = {
  approved: 'success',
  rejected: 'error',
  requestChanges: 'warning',
};
