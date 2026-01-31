import Link from 'next/link';

export default function Hero(){
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI Dream Team — Production-ready AI demos</h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">Beautiful, accessible and performant demos showcasing the team's best work. Built with Next.js 14, Server Actions, and modern web best practices.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/projects" className="inline-flex items-center rounded-[var(--radius)] bg-[var(--color-primary)] px-4 py-2 text-[var(--color-primary-foreground)]">Explore Projects</Link>
          <a href="#contact" className="inline-flex items-center rounded-[var(--radius)] border border-[var(--color-border)] px-4 py-2 text-[var(--color-foreground)]">Contact</a>
        </div>
      </div>
    </section>
  );
}