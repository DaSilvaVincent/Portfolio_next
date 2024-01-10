import Link from "next/link";
import Header from "@/components/header";

export default function Project() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header></Header>
      <main className="flex-1 py-10 px-4 md:px-6 lg:px-8">
        <section className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Projets
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Course automobile
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Petit site web pour inventer un projet fictif, on a réaliser un
                événements au mans avec des voitures de pop cultures.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Fait avec: Arnaud
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Langages utilisés: HTML, CSS
              </p>
              <Link
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                href="https://github.com/DaSilvaVincent/course_automobile"
                target="_blank"
              >
                Lien Github
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Les Pokémons
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Réalisation d&apos;un site web permettant de lister les
                pokémons.
              </p>
              <p className="text-gray-700 dark:text-gray-300">Fait avec: Moi</p>
              <p className="text-gray-700 dark:text-gray-300">
                Langages utilisés: Php, Laravel
              </p>
              <Link
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                href="https://github.com/DaSilvaVincent/pokemons"
                target="_blank"
              >
                Lien Github
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Bomberman
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Réalisation d&apos;une application permettant de jouer à son
                propre bomberman.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Fait avec: Thimothée, Dylan, Thomas
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Langage utilisé: Java
              </p>
              <Link
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                href="https://github.com/DaSilvaVincent/bomberman"
                target="_blank"
              >
                Lien Github
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Une ludothéque
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Réalisation d&apos;une application compléte pour gérer une
                ludothéque.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Fait avec: Thimothée, Dylan, Thomas
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Langages utilisés: Php, Typescript
              </p>
              <Link
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                href="https://github.com/DaSilvaVincent/ludotheque_api"
                target="_blank"
              >
                Lien Github
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
