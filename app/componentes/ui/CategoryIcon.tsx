"use client";
import { Category } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

type CategoryIconProps = {
  category: Category;
};

export default function CategoryIcon({ category }: CategoryIconProps) {
  const params = useParams<{ category: string }>();
  return (
    <div
      className={` ${
        category.icono === params.category ? "bg-amber-300" : ""
      } flex items-center gap-4 w-full vorder-t border-gray-200 p-3 last-of-type:border-b`}
    >
      <div className="w-16 h-16 relative">
        <Image
          fill
          src={`/icon_${category.icono}.svg`}
          alt="imagen Categoria"
        />
      </div>
      <Link className="text-xl font-bold" href={`/order/${category.icono}`}>
        {category.nombre}
      </Link>
    </div>
  );
}
