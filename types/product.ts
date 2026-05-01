export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
};

export type CartItem = Product & {
  qty: number;
};
