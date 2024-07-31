interface Brand {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageURL: string;
  brand: Brand;
}

export { Brand, Product };
