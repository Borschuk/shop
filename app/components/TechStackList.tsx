import TechStackCard from "./TechStackCard";

const techStack = [
  { name: "Next.js 16", description: "App Router, Server Actions, RSC" },
  { name: "React 19", description: "Server Components, Hooks" },
  { name: "TypeScript", description: "End-to-end type safety" },
  { name: "Supabase", description: "Auth + PostgreSQL database" },
  { name: "Tailwind CSS v4", description: "Utility-first styling" },
  { name: "Radix UI Themes", description: "Accessible, dark-themed UI" },
];

export default function TechStackList() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {techStack.map((t) => (
        <TechStackCard key={t.name} name={t.name} description={t.description} />
      ))}
    </div>
  );
}
