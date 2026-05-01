"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import ProductCard from "@/components/ui/ProductCard";
import CartDrawer from "@/components/ui/CartDrawer";
import { products } from "@/data/products";
import {
  addToCart,
  removeOne,
  removeAll,
  getTotal,
  getCount,
} from "@/lib/cart";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-pink-50 to-pink-100">
      <Header
        count={getCount(cart)}
        total={getTotal(cart)}
        onOpenCart={() => setOpen(true)}
      />

      <div className="flex gap-6 flex-wrap justify-center">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={(product) => setCart((c) => addToCart(c, product))}
          />
        ))}
      </div>

      <CartDrawer
        open={open}
        onClose={() => setOpen(false)}
        cart={cart}
        onAdd={(p: any) => setCart((c) => addToCart(c, p))}
        onRemoveOne={(id: string) => setCart((c) => removeOne(c, id))}
        onRemoveAll={(id: string) => setCart((c) => removeAll(c, id))}
        total={getTotal(cart)}
      />
    </div>
  );
}
