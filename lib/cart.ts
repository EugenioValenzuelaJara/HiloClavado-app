import { CartItem, Product } from "@/types/product";

export function addToCart(cart: CartItem[], product: Product): CartItem[] {
  const exists = cart.find((p) => p.id === product.id);

  if (exists) {
    return cart.map((p) =>
      p.id === product.id ? { ...p, qty: p.qty + 1 } : p,
    );
  }

  return [...cart, { ...product, qty: 1 }];
}

export function removeOne(cart: CartItem[], id: string): CartItem[] {
  return cart
    .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
    .filter((p) => p.qty > 0);
}

export function removeAll(cart: CartItem[], id: string): CartItem[] {
  return cart.filter((p) => p.id !== id);
}

export function getTotal(cart: CartItem[]) {
  return cart.reduce((s, p) => s + p.price * p.qty, 0);
}

export function getCount(cart: CartItem[]) {
  return cart.reduce((s, p) => s + p.qty, 0);
}
