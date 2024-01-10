import Header from "@/components/header";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header></Header>
      <main className="flex-1 py-10 px-4 md:px-6 lg:px-8">
        <section className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            A propos de moi
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Je me présente, je m&apos;appelle Vincent Da Silva, j&apos;ai 19 ans
            et je suis étudiant en Bachelor Universitaire de Technologie en
            Informatique à l&apos;IUT de Lens. Au cours de ma formation,
            j&apos;ai développé de nombreuses compétences en informatique
            notamment en langages Python, PHP, Java, SQL, HTML/CSS. Mes points
            forts sont principalement en PHP et en Python. J&apos;ai plusieurs
            loisirs dans la vie comme la programmation, les jeux vidéos, les
            voyages et je pratique du tir à l&apos;arc en club. J&apos;ai
            également pratiqué du badminton pendant plusieurs années.
          </p>
          <div>
            <a
              href="/cv/Anglais_Dasilva_Vincent_CV.pdf"
              target="_blank"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-800 hover:text-white mr-6"
            >
              <span className="text-xl">Mon CV en anglais</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
