import { Producto } from "@prisma/client";

export type OrderIte = Pick<Producto, "id" | "nombre" | "precio"> & {
  quantity: number;
  subtotal: number;
};
