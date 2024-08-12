export type Brand = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageURL: string;
  brand: Brand;
};
