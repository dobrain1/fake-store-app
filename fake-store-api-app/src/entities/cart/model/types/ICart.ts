export interface ICart {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}

export interface INewCart extends Omit<ICart, 'id'> {}
