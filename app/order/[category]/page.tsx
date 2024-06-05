import ProductoCard from "@/app/componentes/productos/ProductoCard";
import { prisma } from "@/src/lib/prisma";

async function getProductos(category: string) {
  const productos = await prisma.producto.findMany({
    where: {
      category: {
        icono: category,
      },
    },
  });
  return productos;
}
export default async function OrderPage({
  params,
}: {
  params: { category: string };
}) {
  const productos = await getProductos(params.category);

  return (
    <>
      <h1 className="text-2xl my-10">
        Elige y personaliza tu pedido a continuacion
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
}
