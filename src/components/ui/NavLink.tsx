import Link from "next/link";

export const NavLink = ({ link, name, className }: { link: string; name: string; className?: string }) => {
  return (
    <Link
        href={link}
        className={className}
      >
        {name}
      </Link>
  )
}

