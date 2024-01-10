import Image from "next/image";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/card";
import Header from "@/components/header";
import Python from "../../../public/image/python.jpg";
import Java from "../../../public/image/java.jpg";
import Php from "../../../public/image/php.jpg";
import React from "../../../public/image/react.jpg";
import Sql from "../../../public/image/sql.jpg";
import Typescript from "../../../public/image/typescript.jpg";
import Kotlin from "../../../public/image/kotlin.jpg";
import Docker from "../../../public/image/docker.jpg";
import Github from "../../../public/image/github.jpg";
import Bash from "../../../public/image/bash.jpg";

export default function Langage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header></Header>
      <main className="flex-1 py-10 px-4 md:px-6 lg:px-8">
        <section className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Langages que j&apos;utilise
          </h1>
          <h2 className="text-lg text-gray-700 dark:text-gray-300">
            Ceci est une liste non exhaustive.
          </h2>
          <div className="grid gap-6 md:grid-cols-5">
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Java
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image alt="Java" className="w-12 h-12" src={Java} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Python
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image alt="Python" className="w-12 h-12" src={Python} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  TypeScript
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Typescript"
                  className="w-12 h-12"
                  src={Typescript}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Sql
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image alt="Sql" className="w-12 h-12" src={Sql} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Php
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image alt="Php" className="w-12 h-12" src={Php} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  React
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image alt="React" className="w-12 h-12" src={React} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Kotlin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image alt="Kotlin" className="w-12 h-12" src={Kotlin} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Docker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image alt="Docker" className="w-12 h-12" src={Docker} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Github
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image alt="Github" className="w-12 h-12" src={Github} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="overflow-ellipsis overflow-hidden">
                  Bash
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image alt="Bash" className="w-12 h-12" src={Bash} />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
