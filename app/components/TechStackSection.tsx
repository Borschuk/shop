import TechStackList from "./TechStackList";

export default function TechStackSection() {
  return (
    <section className="border-t border-white/5 px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Tech Stack
        </h2>
        <p className="mt-1 text-gray-400">
          Modern tooling from the database to the DOM.
        </p>
        <TechStackList />
      </div>
    </section>
  );
}
