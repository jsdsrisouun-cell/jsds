import Image from "next/image";
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Hero />

      <main className="mx-auto max-w-4xl">
        <Features />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>AI Chat Demo — real-time assistant integration</Card>
            <Card>Image Generator — prompts → images</Card>
          </div>
        </section>

        <section id="contact" className="mt-12">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Send us a message and we'll get back to you.</p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
