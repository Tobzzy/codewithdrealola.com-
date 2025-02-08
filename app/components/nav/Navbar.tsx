import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle";
import MobileNavDropdown from "./MobileNavDropdown";

interface NavLink {
  label: React.ReactNode;
  href: string;
  mobile: boolean;
}

// Logo Component
const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`w-16 ${className || ""}`}>
    <Image
      alt="logo"
      src="/ola.png"
      width={64}
      height={64}
      layout="responsive"
      objectFit="contain"
    />
  </div>
);

export const navLinks: NavLink[] = [
  {
    label: "about",
    href: "/about",
    mobile: true,
  },
  {
    label: <Logo />,
    href: "/",
    mobile: false,
  },
  {
    label: "portfolio",
    href: "/portfolio",
    mobile: true,
  },
];

// Navbar Component
const Navbar: React.FC = () => (
  <nav className="navbar sticky top-0 bg-base-200 md:bg-base-100">
    <div className="w-full flex md:justify-center justify-between md:items-center md:gap-2">
      {/* Desktop navigation */}
      <ul className="menu menu-horizontal items-center gap-10 hidden md:flex">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        <li>
          <DarkModeToggle />
        </li>
      </ul>

      {/* Mobile navigation */}
      <MobileNavDropdown />
      <Link href="/">
        <Logo className="md:hidden" />
      </Link>
      <div className="md:hidden">
        <DarkModeToggle />
      </div>
    </div>
  </nav>
);

export default Navbar;
