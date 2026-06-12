import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="bg-violet-500 text-white p-4 self-start w-full flex items-center justify-between">
      <h1 className="text-xl font-bold">My App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li ><Link href="/" className="hover:underline">Home</Link></li>
          <li ><Link href="/products" className="hover:underline">Products</Link></li>
          <li ><Link href="/add-product" className="hover:underline">Add Product</Link></li>
          <li ><Link href="/login" className="hover:underline">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}
