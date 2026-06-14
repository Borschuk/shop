import { ExternalLinkIcon } from "@radix-ui/react-icons";

const GITHUB_REPO = "https://github.com/Borschuk/shop";
const GITHUB_PROFILE = "https://github.com/Borschuk";

export default function GitHubLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <a
        href={GITHUB_REPO}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-xl border border-white/5 bg-white/5 p-5 transition hover:border-violet-500/40 hover:bg-white/10"
      >
        <span className="text-sm text-gray-500">Source Code</span>
        <p className="mt-1 flex items-center gap-1 text-lg font-semibold text-white group-hover:text-violet-300">
          github.com/Borschuk/shop
          <ExternalLinkIcon className="h-4 w-4 shrink-0" />
        </p>
      </a>
      <a
        href={GITHUB_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-xl border border-white/5 bg-white/5 p-5 transition hover:border-violet-500/40 hover:bg-white/10"
      >
        <span className="text-sm text-gray-500">My GitHub</span>
        <p className="mt-1 flex items-center gap-1 text-lg font-semibold text-white group-hover:text-violet-300">
          github.com/Borschuk
          <ExternalLinkIcon className="h-4 w-4 shrink-0" />
        </p>
      </a>
    </div>
  );
}
