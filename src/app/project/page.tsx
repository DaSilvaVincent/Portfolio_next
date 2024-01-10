import Link from "next/link";
import Header from "@/components/header";

export default function Project() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header></Header>
      <main className="flex-1 py-10 px-4 md:px-6 lg:px-8">
        <section className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Project 1
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This is a brief description of Project 1.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Worked with: Alice, Bob
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Languages used: JavaScript, HTML, CSS
              </p>
              <Link
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                href="#"
              >
                GitHub Link
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Project 2
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This is a brief description of Project 2.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Worked with: Charlie, David
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Languages used: Python, Django
              </p>
              <Link
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                href="#"
              >
                GitHub Link
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Project 3
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This is a brief description of Project 3.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Worked with: Eve, Frank
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Languages used: Java, Spring Boot
              </p>
              <Link
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                href="#"
              >
                GitHub Link
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Project 4
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This is a brief description of Project 4.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Worked with: Grace, Harry
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Languages used: Ruby, Rails
              </p>
              <Link
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                href="#"
              >
                GitHub Link
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
