import { storeApi } from '@/shared';
import { ICart, INewCart } from '../model';

interface ICartParams {
  limit?: number;
  sort?: 'asc' | 'desc';
  startdate?: string;
  enddate?: string;
}

export const cartApi = storeApi.injectEndpoints({
  endpoints: (build) => ({
    getCarts: build.query<ICart[], ICartParams>({
      query: ({ limit, sort, startdate, enddate }) => ({
        url: '/carts',
        params: { limit, sort, startdate, enddate },
      }),
    }),
    getCartById: build.query<ICart, number>({
      query: (id) => ({
        url: `/carts/${id}`,
      }),
    }),
    getUserCart: build.query<ICart, number>({
      query: (id) => ({
        url: `/carts/user/${id}`,
      }),
    }),
    updateCart: build.mutation<ICart, { cartId: number; newCart: INewCart }>({
      query: ({ cartId, newCart }) => ({
        url: `/carts/${cartId}`,
        method: 'PUT',
        body: newCart,
      }),
    }),
    addNewCart: build.mutation<ICart, INewCart>({
      query: (newCart) => ({
        url: `/carts`,
        method: 'POST',
        body: newCart,
      }),
    }),
    deleteCart: build.mutation<ICart, number>({
      query: (id) => ({
        url: `/carts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetCartsQuery,
  useGetCartByIdQuery,
  useAddNewCartMutation,
  useDeleteCartMutation,
  useGetUserCartQuery,
  useUpdateCartMutation,
} = cartApi;
