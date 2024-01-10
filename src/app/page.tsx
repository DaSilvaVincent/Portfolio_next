import { CardTitle, CardHeader, CardContent, Card } from "@/components/card";
import { Button } from "@/components/button";
import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header></Header>
      <main className="flex-1 py-10 px-4 md:px-6 lg:px-8">
        <section className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Bienvenue sur mon portfolio!
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Bonjour c&apos;est moi
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>A propos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">J&apos;ai 20 ans</p>
                <Button className="mt-4">
                  <Link href="/about">Savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Langage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">Les technos</p>
                <Button className="mt-4">
                  <Link href="/language">Savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Projets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">Des projets</p>
                <Button className="mt-4">
                  <Link href="/project">Savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
