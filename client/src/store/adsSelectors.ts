import type { RootState } from './store';

export const selectAdsItems = (state: RootState) => state.ads.items;
export const selectAdsIds = (state: RootState) => state.ads.ids;

export const selectPrevNextIds = (state: RootState, currentId: number) => {
  const ids = state.ads.ids;
  const index = ids.indexOf(currentId);

  return {
    prevId: index > 0 ? ids[index - 1] : null,
    nextId: index !== -1 && index < ids.length - 1 ? ids[index + 1] : null,
  };
};
