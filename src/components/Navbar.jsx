"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Timeline", href: "/timeline" },
        { name: "Stats", href: "/stats" },
    ];

    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto px-4">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl font-bold tracking-wide">
                    KeenKeeper
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={
                                        isActive
                                            ? "text-amber-500 font-semibold bg-amber-500/10"
                                            : "hover:text-amber-400"
                                    }
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;