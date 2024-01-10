import { CardTitle, CardHeader, CardContent, Card } from "@/components/card";
import Header from "@/components/header";

export default function Langage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header></Header>
      <main className="flex-1 py-10 px-4 md:px-6 lg:px-8">
        <section className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Languages I Know
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Here are the programming languages I am proficient in.
          </p>
          <div className="grid gap-6 md:grid-cols-5">
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Java
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img alt="Java" className="w-12 h-12" src="/placeholder.svg" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Python
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Python"
                  className="w-12 h-12"
                  src="/placeholder.svg"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  JavaScript
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="JavaScript"
                  className="w-12 h-12"
                  src="/placeholder.svg"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  C++
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img alt="C++" className="w-12 h-12" src="/placeholder.svg" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Ruby
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img alt="Ruby" className="w-12 h-12" src="/placeholder.svg" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Go
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img alt="Go" className="w-12 h-12" src="/placeholder.svg" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Rust
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img alt="Rust" className="w-12 h-12" src="/placeholder.svg" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Swift
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img alt="Swift" className="w-12 h-12" src="/placeholder.svg" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Kotlin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Kotlin"
                  className="w-12 h-12"
                  src="/placeholder.svg"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  TypeScript
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="TypeScript"
                  className="w-12 h-12"
                  src="/placeholder.svg"
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
