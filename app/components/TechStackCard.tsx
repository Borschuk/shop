type TechStackCardProps = {
  name: string;
  description: string;
};

export default function TechStackCard({
  name,
  description,
}: TechStackCardProps) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/3 px-5 py-4">
      <span className="font-semibold text-white">{name}</span>
      <span className="ml-2 text-sm text-gray-500">{description}</span>
    </div>
  );
}
