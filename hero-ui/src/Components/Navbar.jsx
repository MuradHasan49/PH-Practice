import { Link, Button } from "@heroui/react";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
    return (

        <>
            {/* Basic */}
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <p className="font-bold">ACME</p>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/homepage">Home</Link></li>
                        <li><Link href="/main">Main</Link></li>
                    </ul>
                                    <div className="">
                    <ThemeToggleButton/>
                </div>
                </header>

            </nav>
        </>
    )
}

export default Navbar