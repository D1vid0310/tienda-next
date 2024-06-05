"use client";
import { useStore } from "@/src/Store";
import ProductosDetallados from "./ProductosDetallados";

export default function OrderSumary() {
  const order = useStore((state) => state.order);
  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">Mi pedido</h1>

      {order.length === 0 ? (
        <p className="text-center my-10">el carrito esta vacio</p>
      ) : (
        <div className="mt-5">
          {order.map((item) => (
            <ProductosDetallados key={item.id} item={item} />
          ))}
        </div>
      )}
    </aside>
  );
}
