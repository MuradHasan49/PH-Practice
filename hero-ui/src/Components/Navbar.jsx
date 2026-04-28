"use client"
import { Link, Button } from "@heroui/react";
import ThemeToggleButton from "./ThemeToggleButton";
import { signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {
    const { data, isPending } = useSession();
    const user = data?.user;
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
                    </ul>
                    <div className="flex items-center gap-3">
                        <ThemeToggleButton />
                        <div className="flex items-center">
                            {user ? (
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-default-100 border border-default-200">
                                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-semibold">
                                            {user.name?.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="text-sm font-medium text-default-700">
                                            {user.name}
                                        </span>
                                    </div>
                                    <Button
                                        size="sm"
                                        variant="flat"
                                        color="danger"
                                        onPress={() => signOut()}
                                        className="font-medium"
                                    >
                                        Sign Out
                                    </Button>
                                </div>
                            ) : (
                                <div className=" space-x-2">
                                    <Link
                                        href="/form/signin">
                                        <Button

                                            className="font-semibold bg-linear-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200 border-0"
                                        >
                                            Sign In
                                        </Button>
                                    </Link>
                                    <Link
                                        href="/form/signup">
                                        <Button

                                            className="font-semibold bg-linear-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200 border-0"
                                        >
                                            Sign Up
                                        </Button>
                                    </Link>


                                </div>
                            )}
                        </div>
                    </div>
                </header>

            </nav>
        </>
    )
}

export default Navbar