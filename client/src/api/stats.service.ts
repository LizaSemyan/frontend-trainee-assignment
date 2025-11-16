import type { ActivityData, DecisionsData, Moderator, PeriodParams, StatsSummary } from '../types';
import { api } from './axios';

export const statsService = {
  async getSummary(params?: PeriodParams) {
    const res = await api.get<StatsSummary>(`/stats/summary`, { params });
    return res.data;
  },

  async getActivityChart(params?: PeriodParams) {
    const res = await api.get<ActivityData[]>(`/stats/chart/activity`, { params });
    return res.data;
  },

  async getDecisionsChart(params?: PeriodParams) {
    const res = await api.get<DecisionsData>(`/stats/chart/decisions`, { params });
    return res.data;
  },

  async getCategoriesChart(params?: PeriodParams) {
    const res = await api.get<Record<string, number>>(`/stats/chart/categories`, { params });
    return res.data;
  },

  async getCurrentModerator() {
    const res = await api.get<Moderator>(`/moderators/me`);
    return res.data;
  },
};
