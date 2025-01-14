import { XCircleIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { OrderIte } from "@/src/types";
import React from "react";
import { fomormaCu } from "@/src/utilis";

type ProductosDetalladosProps = {
  item: OrderIte;
};

export default function ProductosDetallados({
  item,
}: ProductosDetalladosProps) {
  return (
    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <p className="text-xl font-bold">{item.nombre} </p>

          <button type="button" onClick={() => {}}>
            <XCircleIcon className="text-red-600 h-8 w-8" />
          </button>
        </div>
        <p className="text-2xl text-amber-500 font-black">
          {fomormaCu(item.precio)}
        </p>
        <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
          <button type="button" onClick={() => {}}>
            <MinusIcon className="h-6 w-6" />
          </button>

          <p className="text-lg font-black ">{item.quantity}</p>

          <button type="button" onClick={() => {}}>
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
        <p className="text-xl font-black text-gray-700">
          Subtotal: {""}
          <span className="font-normal"> {fomormaCu(item.subtotal)}</span>
        </p>
      </div>
    </div>
  );
}
