import { Link, usePage } from "@inertiajs/react";
import { FaBuilding } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useEffect, useState } from "react";

const NavigationBar = ({user}) => {

    const { url } = usePage(); 
    const [path, setPath] = useState("");

    useEffect(() => {
        const currentPath = window.location.pathname;
        setPath(currentPath);
    }, [url]);

    return (
        <nav className="max-w-7xl mx-auto flex py-3 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
                <div className="px-2 py-3 bg-accent rounded-sm">
                    <FaBuilding className="text-2xl text-white" />
                </div>
                <div className="text-secondary">
                    <h1 className="text-xl font-extrabold">Sewa Gedung</h1>
                    <h2 className="text-sm">Cepat Dan Aman</h2>
                </div>
            </Link>
            <ul className="flex gap-7 text-secondary">
                <Link
                    href="/"
                    className={path === "/" ? "text-accent font-bold" : ""}
                >
                    Beranda
                </Link>
                <Link
                    href="/about"
                    className={
                        path === "/about"
                            ? "text-accent font-bold"
                            : "hover:text-accent"
                    }
                >
                    Tentang Kami
                </Link>
                <Link
                    href="/order"
                    className={
                        path === "/order"
                            ? "text-accent font-bold"
                            : "hover:text-accent"
                    }
                >
                    Pemesanan
                </Link>
                <Link
                    href="/schedule"
                    className={
                        path === "/schedule"
                            ? "text-accent font-bold"
                            : "hover:text-accent"
                    }
                >
                    Jadwal
                </Link>

                {/* Tampilkan link ke Dashboard jika user sudah login */}
                {user && (
                    <Link
                        href="/dashboard"
                        className={
                            path === "/dashboard"
                                ? "text-accent font-bold"
                                : "hover:text-accent"
                        }
                    >
                        Dashboard
                    </Link>
                )}
            </ul>

            {/* Tampilkan link login jika user belum login */}
            {!user && (
                <Link
                    href="/login"
                    className="flex items-center px-2 py-2 gap-1 bg-customMint rounded-sm text-accent shadow-lg hover:scale-105"
                >
                    <span className="text-sm">Login Admin</span>
                    <IoIosArrowDroprightCircle className="text-xl" />
                </Link>
            )}
        </nav>
    );
};

export default NavigationBar;
