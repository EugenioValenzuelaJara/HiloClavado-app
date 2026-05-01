export default function CartDrawer({
  open,
  onClose,
  cart,
  onAdd,
  onRemoveOne,
  onRemoveAll,
  total,
}: any) {
  return (
    <>
      {open && (
        <div onClick={onClose} className="fixed inset-0 bg-black/40 z-40" />
      )}

      <div
        className={`fixed top-0 right-0 w-[360px] h-full bg-gray-900 text-white p-5 z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">🧺 Carrito</h2>

        {cart.length === 0 && <p>Carrito vacío</p>}

        {cart.map((item: any) => (
          <div key={item.id} className="border-b border-gray-700 py-2">
            <div>{item.name}</div>
            <div>${item.price * item.qty}</div>

            <div className="flex gap-2 mt-2">
              <button onClick={() => onRemoveOne(item.id)}>➖</button>
              <span>{item.qty}</span>
              <button onClick={() => onAdd(item)}>➕</button>
              <button onClick={() => onRemoveAll(item.id)}>❌</button>
            </div>
          </div>
        ))}

        <div className="mt-4 font-bold text-lg">Total: ${total}</div>

        <button className="w-full mt-4 bg-pink-600 py-2 rounded-lg font-bold">
          Pagar
        </button>
      </div>
    </>
  );
}
