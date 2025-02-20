import { storeApi } from '@/shared';
import { IProduct, INewProduct } from '../model';

interface IProductParams {
  limit?: number;
  sort?: 'asc' | 'desc';
}

type Categories = ['electronics' | 'jewelery' | "men's clothing" | "women's clothing"];

export const productApi = storeApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], Partial<IProductParams>>({
      query: ({ limit, sort }) => ({
        url: '/products',
        params: { limit, sort },
      }),
    }),
    getProductById: build.query<IProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    getProductCategories: build.query<Categories, void>({
      query: () => ({
        url: `/products/categories`,
      }),
    }),
    getProductByCategory: build.query<IProduct[], string>({
      query: (category) => ({
        url: `/products/category/${category}`,
      }),
    }),
    addNewProduct: build.mutation<IProduct, INewProduct>({
      query: (newProduct) => ({
        url: `/products`,
        method: 'POST',
        body: newProduct,
      }),
    }),
    updateProduct: build.mutation<IProduct, { productId: number; newProduct: INewProduct }>({
      query: ({ productId, newProduct }) => ({
        url: `/products/${productId}`,
        method: 'PUT',
        body: newProduct,
      }),
    }),
    deleteProduct: build.mutation<IProduct, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductMutation,
  useAddNewProductMutation,
  useGetProductByCategoryQuery,
  useGetProductCategoriesQuery,
  useUpdateProductMutation,
} = productApi;
