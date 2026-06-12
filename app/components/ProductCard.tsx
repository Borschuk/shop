import type { Product } from "@/app/lib/types";
import Image from "next/image";
import productImage from "../product.png";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white p-4 shadow-md">
      <div>
        <Image
          src={productImage}
          width={150}
          height={150}
          alt="Picture of the author"
        />
      </div>
      <h2 className="text-xl font-bold text-gray-800">
        Product: {product.product_name}
      </h2>
      <p className="text-gray-600">
        Description: {product.product_description}
      </p>
      <p className="text-lg font-bold text-gray-800">
        Price: <span className="text-red-500">${product.product_price}</span>
      </p>
    </div>
  );
}
