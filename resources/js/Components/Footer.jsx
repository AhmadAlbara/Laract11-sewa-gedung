import { Link } from "@inertiajs/react";
import React from "react";
import { FaBuilding } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="mt-32 max-w-7xl mx-auto ">
            <Link href="/" className="flex items-center gap-2 ">
                <div className="px-2 py-3 bg-accent rounded-sm">
                    <FaBuilding className="text-2xl text-white" />
                </div>
                <div className="text-secondary">
                    <h1 className=" text-xl font-extrabold">Sewa Gedung</h1>
                    <h2 className="text-sm ">Cepat Dan Aman</h2>
                </div>
            </Link>
            <div className="mt-8 flex items-center justify-between">
                <div className="text-sm text-customGray">
                    <p>Gedung Serbaguna BPSDM Pontianak</p>
                    <p className="mt-2">
                        Mengadakan Berbagai Kegiatan Seperti Pertemuan, <br />{" "}
                        Pesta
                    </p>
                </div>
                <Link className="py-2 px-4 bg-accent text-white rounded-md flex gap-2 font-bold items-center hover:scale-105">
                    Pesan Sekarang
                    <IoIosArrowDroprightCircle />
                </Link>
            </div>

            <div className="py-10 flex items-center justify-center bg-accent w-full rounded-t-md mt-10">
                <h1 className="text-white ">
                    {" "}
                    Dibuat Oleh <span className="font-bold">BPSDM </span>
                    Pontianak Kalimantan Barat. &copy;{" "}
                    {new Date().getFullYear()} All rights reserved.
                </h1>
            </div>
        </footer>
    );
};

export default Footer;
