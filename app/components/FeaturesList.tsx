import {
  GearIcon,
  LayersIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PlusCircledIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <LockClosedIcon className="w-6 h-6" />,
    title: "Authentication",
    description:
      "Full sign-up, sign-in, and sign-out flow powered by Supabase Auth.",
  },
  {
    icon: <PlusCircledIcon className="w-6 h-6" />,
    title: "Product CRUD",
    description:
      "Create, read, update, and delete product listings with server actions.",
  },
  {
    icon: <MagnifyingGlassIcon className="w-6 h-6" />,
    title: "Product Catalog",
    description:
      "Browse a server-rendered, paginated list of all products sorted by date.",
  },
  {
    icon: <ReaderIcon className="w-6 h-6" />,
    title: "Detail Pages",
    description:
      "Individual product views with full metadata and owner actions.",
  },
  {
    icon: <LayersIcon className="w-6 h-6" />,
    title: "Protected Routes",
    description:
      "Unauthenticated users are redirected to login for guarded pages.",
  },
  {
    icon: <GearIcon className="w-6 h-6" />,
    title: "Modern React 19",
    description: "useActionState, Server Components, and App Router patterns.",
  },
];

export default function FeaturesList() {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <FeatureCard
          key={f.title}
          icon={f.icon}
          title={f.title}
          description={f.description}
        />
      ))}
    </div>
  );
}
