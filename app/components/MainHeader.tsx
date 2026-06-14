import Link from "next/link";
import Image from "next/image";
import productImage from "../product.png";

export default function MainHeader() {
  return (
    <header className="bg-violet-500 text-white p-4 self-start w-full flex items-center justify-between">
      <Link
        href="/"
        className="rounded-full bg-teal-500 h-12.5 w-12.5 flex align-middle justify-around"
      >
        <Image
          src={productImage}
          width={35}
          height={35}
          alt="Picture of the author"
          className="object-none"
        />
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link href="/add-product" className="hover:underline">
              Add Product
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
