export default function Features(){
  const features = [
    { id: 'f1', title: 'Real-time Chat', desc: 'Streaming responses with optimistic UI and server-side validation.' },
    { id: 'f2', title: 'Image Generation', desc: 'Prompt-driven image synthesis with previews and presets.' },
    { id: 'f3', title: 'Actions & Forms', desc: 'Server Actions (Next.js 14) used for secure, type-safe mutations.' },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold">What we build</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map(f => (
            <div key={f.id} className="rounded-[var(--radius)] border border-[var(--color-border)] p-4 bg-[var(--color-input)]">
              <h3 className="font-semibold text-[var(--color-foreground)]">{f.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}