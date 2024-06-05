import { Producto } from "@prisma/client";
import { fomormaCu } from "@/src/utilis/index";
import Image from "next/image";
import React from "react";
import AddProductosButton from "./AddProductosButton";

type ProductoCard = {
  producto: Producto;
};
export default function ProductoCard({ producto }: ProductoCard) {
  return (
    <div className="border bg-white">
      <Image
        width={400}
        height={500}
        src={`/products/${producto.imagen}.jpg`}
        alt={`imagen platillo ${producto.nombre}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{producto.nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {fomormaCu(producto.precio)}
        </p>
        <AddProductosButton Producto={producto} />
      </div>
    </div>
  );
}
