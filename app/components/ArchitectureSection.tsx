const highlights = [
  {
    title: "Server Actions",
    text: "All data mutations (create, update, delete) run as secure server actions with built-in auth checks.",
  },
  {
    title: "React Server Components",
    text: "\u2006— Product pages are rendered on the server and streamed to the client, minimising JavaScript shipped to the browser.",
  },
  {
    title: "Supabase Auth + SSR",
    text: (
      <>
        Cookie-based session handling via <code>@supabase/ssr</code> for
        seamless authentication across server and client.
      </>
    ),
  },
  {
    title: "Radix UI Themes",
    text: "A polished, accessible dark-mode UI out of the box with minimal custom CSS.",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="border-t border-white/5 px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Architecture Highlights
        </h2>
        <ul className="mt-6 space-y-4 text-gray-300">
          {highlights.map((h) => (
            <li key={h.title} className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
              <span>
                <strong className="text-white">{h.title}</strong> — {h.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
