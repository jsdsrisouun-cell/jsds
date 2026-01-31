import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t mt-12 py-6">
      <div className="mx-auto max-w-6xl px-4 text-sm text-center text-muted-foreground">
        © {new Date().getFullYear()} AI Dream Team. Built with Next.js & Tailwind.
      </div>
    </footer>
  )
}