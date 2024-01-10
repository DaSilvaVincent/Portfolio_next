import Header from "@/components/header";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header></Header>
      <main className="flex-1 py-10 px-4 md:px-6 lg:px-8">
        <section className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            About Me
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hello! I&apos;m John Doe, a software engineer with over 10 years of
            experience in the tech industry. I specialize in full-stack
            development, with a particular interest in JavaScript and its
            related technologies.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I have a passion for creating efficient, scalable, and user-friendly
            applications. I believe in the power of technology to solve complex
            problems and make people&apos;s lives easier.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            When I&apos;m not coding, you can find me hiking in the mountains,
            reading a good book, or experimenting with new recipes in the
            kitchen.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Feel free to reach out if you&apos;d like to connect or discuss potential
            projects. I&apos;m always open to new opportunities and collaborations.
          </p>
        </section>
      </main>
    </div>
  );
}
