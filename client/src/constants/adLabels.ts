import type { AdPriority, AdStatus } from '../types';

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
