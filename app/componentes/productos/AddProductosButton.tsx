"use client";
import { Producto } from "@prisma/client";
import React from "react";
import { useStore } from "@/src/Store";

type AddProductosButton = {
  Producto: Producto;
};

export default function AddProductosButton({ Producto }: AddProductosButton) {
  const addToOrder = useStore((state) => state.addToOrder);

  return (
    <button
      type="button"
      className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase  font-bold cursor-pointer"
      onClick={() => addToOrder(Producto)}
    >
      Agregar
    </button>
  );
}
