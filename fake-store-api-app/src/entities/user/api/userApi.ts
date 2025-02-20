import { storeApi } from '@/shared';
import { INewUser, IUser } from '../model';

interface IUserParams {
  limit?: number;
  sort?: 'asc' | 'desc';
}

export const userApi = storeApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<IUser[], IUserParams>({
      query: ({ limit, sort }) => ({
        url: '/users',
        params: { limit, sort },
      }),
    }),
    getUserById: build.query<IUser, number>({
      query: (id) => ({
        url: `/users/${id}`,
      }),
    }),
    addNewUser: build.mutation<IUser, INewUser>({
      query: (user) => ({
        url: `/users`,
        method: 'POST',
        body: user,
      }),
    }),
    updateUser: build.mutation<IUser, INewUser>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: [],
      }),
    }),
    deleteUser: build.mutation<IUser, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddNewUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
