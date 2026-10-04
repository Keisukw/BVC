// Ícones simples (SVG inline, sem dependências). Troque por suas ilustrações do Figma
// passando "image" no ServiceCard, se preferir.
const paths = {
  printer: (
    <>
      <rect x="14" y="8" width="36" height="14" rx="2" />
      <rect x="6" y="22" width="52" height="22" rx="5" />
      <rect x="16" y="36" width="32" height="20" rx="2" />
    </>
  ),
  layers: (
    <>
      <rect x="10" y="12" width="30" height="40" rx="4" transform="rotate(-10 25 32)" />
      <rect x="24" y="12" width="30" height="40" rx="4" transform="rotate(8 39 32)" />
    </>
  ),
  laptop: (
    <>
      <rect x="12" y="12" width="40" height="28" rx="3" />
      <path d="M4 48h56l-4 6H8z" />
    </>
  ),
  book: (
    <>
      <rect x="14" y="6" width="36" height="52" rx="4" />
      <path d="M8 16h10M8 28h10M8 40h10" />
    </>
  ),
  mug: (
    <>
      <path d="M10 18h30v22a10 10 0 0 1-10 10h-10a10 10 0 0 1-10-10z" />
      <path d="M40 24h6a6 6 0 0 1 0 14h-6" />
    </>
  ),
  cloud: (
    <>
      <path d="M20 46a12 12 0 0 1-2-23 14 14 0 0 1 27 4 10 10 0 0 1-1 19z" />
      <path d="M32 44V30m-6 6 6-6 6 6" />
    </>
  ),
};

export default function ServiceIcon({ name }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
