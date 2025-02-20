import { useGetProductsQuery } from '@/entities';

interface IProductParams {
  limit?: number;
  sort?: 'asc' | 'desc';
}

export const useProducts = ({ limit, sort }: IProductParams) => {
  const { data, isLoading, error } = useGetProductsQuery({ limit, sort });

  return {
    products: data || [],
    isLoading,
    error,
  };
};
