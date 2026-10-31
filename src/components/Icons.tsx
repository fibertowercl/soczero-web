import type { IconName } from "@/i18n/dictionaries";

type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const ShieldIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3l7 3v6c0 4.4-3 8.2-7 9-4-.8-7-4.6-7-9V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const EyeIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const TargetIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

export const NetworkIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="9" y="2" width="6" height="5" rx="1" />
    <rect x="2" y="17" width="6" height="5" rx="1" />
    <rect x="16" y="17" width="6" height="5" rx="1" />
    <path d="M12 7v5M5 17v-2.5h14V17M12 12v2.5" />
  </svg>
);

export const UsersIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" />
    <path d="M16 4.6a3.5 3.5 0 010 6.8M18 14.8c1.8.7 3 2.6 3.5 5.2" />
  </svg>
);

export const CodeIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
  </svg>
);

export const LayersIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
  </svg>
);

export const BriefcaseIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" />
  </svg>
);

export const ChartIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 3v18h18" />
    <path d="M7 15l4-4 3 3 6-6" />
  </svg>
);

export const MailIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const PhoneIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
);

export const CheckIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const ArrowIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const BellIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6 9a6 6 0 1112 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9z" />
    <path d="M10 20a2 2 0 004 0" />
  </svg>
);

export const LinkedInIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.5h4V21H3V9.5zM9.5 9.5h3.8v1.6h.06c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4V9.5z" />
  </svg>
);

export const SearchIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4M8.5 11h5M11 8.5v5" />
  </svg>
);

export const CloudIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M7 18a4.5 4.5 0 01-.5-9A6 6 0 0118 8.5a4.75 4.75 0 01-.5 9.5H7z" />
    <path d="M12 11v4M10 13h4" />
  </svg>
);

export const SirenIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6 18v-5a6 6 0 0112 0v5M4 21h16M12 3V2M4.5 6.5l-1-1M19.5 6.5l1-1" />
    <path d="M12 11v3" />
  </svg>
);

export const RefreshIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M20 11a8 8 0 00-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0014.5 4.5L20 16M20 20v-4h-4" />
  </svg>
);

export const BugIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="7" y="8" width="10" height="12" rx="5" />
    <path d="M9 8a3 3 0 016 0M12 12v8M3 13h4M17 13h4M4 7l3 2M20 7l-3 2M4 19l3-2M20 19l-3-2" />
  </svg>
);

export const GlobeIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
  </svg>
);

export const RadarIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <path d="M12 12l6-6" />
    <circle cx="15.5" cy="14.5" r="1" fill="currentColor" />
  </svg>
);

export const FileIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>
);

export const iconMap: Record<IconName, (p: P) => React.JSX.Element> = {
  search: SearchIcon,
  cloud: CloudIcon,
  eye: EyeIcon,
  siren: SirenIcon,
  refresh: RefreshIcon,
  bug: BugIcon,
  globe: GlobeIcon,
  radar: RadarIcon,
  target: TargetIcon,
  code: CodeIcon,
  briefcase: BriefcaseIcon,
  users: UsersIcon,
  bell: BellIcon,
  shield: ShieldIcon,
};

export const ExternalIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" />
  </svg>
);

export const DownloadIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </svg>
);

export const PlayIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5l5 3.5-5 3.5v-7z" fill="currentColor" />
  </svg>
);
