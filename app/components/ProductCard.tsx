import type { Product } from "@/app/lib/types";
import Image from "next/image";
import productImage from "../product.png";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white p-3 shadow-md sm:p-4">
      <div className="flex justify-center sm:block">
        <Image
          src={productImage}
          width={120}
          height={120}
          alt="Picture of the author"
          className="sm:w-[150px] sm:h-[150px]"
        />
      </div>
      <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
        Product: {product.product_name}
      </h2>
      <p className="text-sm text-gray-600 sm:text-base">
        Description: {product.product_description}
      </p>
      <p className="text-base font-bold text-gray-800 sm:text-lg">
        Price: <span className="text-red-500">${product.product_price}</span>
      </p>
    </div>
  );
}
