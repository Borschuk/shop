import FeaturesList from "./FeaturesList";

export default function FeaturesSection() {
  return (
    <section className="px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          What's Inside
        </h2>
        <p className="mt-1 text-gray-400">
          Every feature you'd expect from a real-world product catalog.
        </p>
        <FeaturesList />
      </div>
    </section>
  );
}
