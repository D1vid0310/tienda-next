import React from "react";
import { create } from "zustand";
import { OrderIte } from "./types";
import { Producto } from "@prisma/client";
import { producto } from "@/prisma/data/producto";

interface Store {
  order: OrderIte[];
  addToOrder: (Producto: Producto) => void;
  increaseQuantity: (id: Producto["id"]) => void;
}

export const useStore = create<Store>((set, get) => ({
  order: [],
  addToOrder: (Producto) => {
    const { categoriaId, imagen, ...data } = Producto;

    let order: OrderIte[] = [];

    if (get().order.find((item) => item.id === data.id)) {
      order = get().order.map((item) =>
        item.id === Producto.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: item.precio * item.quantity + 1,
            }
          : item
      );
    } else {
      order = [
        ...get().order,
        { ...data, quantity: 1, subtotal: 1 * Producto.precio },
      ];
    }

    set(() => ({
      order,
    }));
  },
  increaseQuantity: (id) => {
    set((state) => ({
      order: state.order.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: item.precio * item.quantity + 1,
            }
          : item
      ),
    }));
  },
}));
