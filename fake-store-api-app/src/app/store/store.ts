import { configureStore } from '@reduxjs/toolkit';
import { storeApi } from '@/shared';

export const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
