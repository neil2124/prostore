// import { PrismaClient } from '../lib/generated/prisma';
import sampleData from './sample-data';
import { prisma } from '../db/prisma'; // Adjust the import path as necessary

async function main() {
//   const prisma = new PrismaClient();
  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });

  console.log('Database seeded successfully');
}

main();