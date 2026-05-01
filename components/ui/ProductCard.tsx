import Image from "next/image";
import { Product } from "@/types/product";

export default function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (p: Product) => void;
}) {
  return (
    <div
      style={{
        background: product.color,
        padding: 20,
        borderRadius: 18,
        width: 240,
        textAlign: "center",
      }}
    >
      <div className="relative w-[200px] h-[140px] mx-auto bg-white rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <h2 className="font-bold mt-3">{product.name}</h2>
      <p className="font-bold">${product.price}</p>

      <button
        onClick={() => onAdd(product)}
        className="mt-2 bg-pink-600 text-white px-3 py-2 rounded-lg font-bold"
      >
        Agregar
      </button>
    </div>
  );
}
