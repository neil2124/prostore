// db/prisma.ts

import { PrismaClient } from "@/lib/generated/prisma";
import { withAccelerate }   from "@prisma/extension-accelerate";

// 1) Instantiate a plain PrismaClient()
// 2) Extend it with Accelerate (Data Proxy) support
// 3) Extend it again to convert Decimal fields to strings
export const prisma = new PrismaClient()
  .$extends(
    // ─── Enable Prisma Accelerate (Data Proxy) ───
    withAccelerate()
  )
  .$extends({
    // ─── Custom “result” extension: turn Decimal → string ───
    result: {
      product: {
        price: {
          compute(product) {
            return product.price.toString();
          },
        },
        rating: {
          compute(product) {
            return product.rating.toString();
          },
        },
      },
    },
  });
