interface NavLink {
  label: string
  href: string
}

interface NavLinkBarProps {
  links: NavLink[]
}

export function NavLinkBar({ links }: NavLinkBarProps) {
  return (
    <nav className="mt-8 flex flex-wrap justify-center gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
