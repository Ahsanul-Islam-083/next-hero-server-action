import Link from "next/link";
import ThemToggle from "./ThemToggle";


const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    {/* <Logo /> */}
                    <p className="font-bold">ACME</p>
                </div>
                <ul className="flex items-center gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/hero">Hero</Link></li>
                    <li><Link href="/tasks">Tasks</Link></li>
                </ul>
                <div>
                    <ThemToggle/>
                </div>
            </header>
        </nav>
    );
};

export default Navbar;