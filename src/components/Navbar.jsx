import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">KeenKeeper</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/timeline">Timeline</Link></li>
                    <li><Link href="/stats">Stats</Link></li>    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;