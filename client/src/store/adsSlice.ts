import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Advertisement } from '../types';

interface AdsState {
  items: Advertisement[];
  ids: number[];
}

const initialState: AdsState = {
  items: [],
  ids: [],
};

const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    setAds(state, action: PayloadAction<Advertisement[]>) {
      state.items = action.payload;
      state.ids = action.payload.map((ad) => ad.id);
    },
    clearAds(state) {
      state.items = [];
      state.ids = [];
    },
  },
});

export const { setAds, clearAds } = adsSlice.actions;
export default adsSlice.reducer;
