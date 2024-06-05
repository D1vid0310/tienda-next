import { categoria } from "./data/categoria";
import { producto } from "./data/producto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.category.createMany({
      data: categoria,
    });
    await prisma.producto.createMany({
      data: producto,
    });
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
