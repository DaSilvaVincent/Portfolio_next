import Image from "next/image";
import Link from "next/link";
import Vincent from "../../public/image/moi.jpg";

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center justify-between px-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center gap-4">
        <img
          alt="Profile"
          className="w-14 h-14 rounded-full"
          src="../../public/image/moi.jpg"
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
        />
        <Link
          className="text-2xl font-bold text-gray-900 dark:text-gray-100"
          href="/"
        >
          Vincent Da Silva
        </Link>
      </div>
      <nav className="flex gap-4">
        <Link
          className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          href="/project"
        >
          Projets
        </Link>
        <Link
          className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          href="/about"
        >
          A propos
        </Link>
        <Link
          className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          href="/language"
        >
          Langage
        </Link>
      </nav>
    </header>
  );
}
