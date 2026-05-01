"use client";

export default function Header({ count, total, onOpenCart }: any) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-pink-600">🛒 HiloClavado Store</h1>

      <button
        onClick={onOpenCart}
        className="bg-gray-900 text-white px-4 py-2 rounded-xl font-bold"
      >
        🧺 {count} | ${total}
      </button>
    </div>
  );
}
