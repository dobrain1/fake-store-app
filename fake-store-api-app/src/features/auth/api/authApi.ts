import { storeApi } from '@/shared';

export const authApi = storeApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ token: string }, { username: string; password: string }>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
