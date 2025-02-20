import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_STORE_API}` }),
  endpoints: () => ({}),
});
