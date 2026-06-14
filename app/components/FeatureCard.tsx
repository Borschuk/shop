import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group rounded-xl border border-white/5 bg-white/5 p-5 transition hover:border-violet-500/40 hover:bg-white/10">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600/20 text-violet-400 group-hover:bg-violet-600/30">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-gray-400">{description}</p>
    </div>
  );
}
