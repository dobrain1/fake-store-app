export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface INewProduct extends Omit<IProduct, 'id'> {}
