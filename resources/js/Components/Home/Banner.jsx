
import { Link } from "@inertiajs/react";
import React from "react";
import { FaCompass } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";
const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto min-h-screen mt-20 flex justify-between text-secondary  gap-10">
            <div className="w-1/2">
                <h2 className="font-bold flex items-center gap-2">
                    <FaCompass className="text-accent " />
                    Sewa Gedung Serbaguna Pontianak
                </h2>
                <h1 className="text-4xl font-bold mt-5">
                    Gedung Aula Serbaguna{" "}
                    <span className="text-accent">BPSDM Pontianak</span> Untuk
                    Layanan Sewa Gedung.
                </h1>
                <p className="mt-10  text-customGray">
                    Gedung Aula Serbaguna BPSDM Pontianak Tempat Mengadakan
                    Berbagai Kegiatan Seperti Pertemuan, Pesta Pernikahan,
                    Dll.Gedung Aula Serbaguna BPSDM Pontianak Dapat Menampung
                    Kurang Lebih 200 Orang.
                </p>
                <div className="flex gap-10 mt-20">
                    <Link className="py-2 px-4 bg-accent text-white rounded-md flex gap-2 font-bold items-center  hover:scale-105">
                        Pesan Sekarang
                        <IoIosArrowDroprightCircle />
                    </Link>
                    <Link 
                    href="#price" 
                    className="py-2 px-4 bg-customMint text-accent  rounded-md flex gap-2 font-bold items-center hover:scale-105">
                        Paket Gedung
                        <IoIosArrowDroprightCircle />
                    </Link>
                </div>
            </div>
            <div className="w-1/2 h-[500px] relative ">
                <img
                    src="/images/hero.jpeg"
                    alt="Gedung Aula Serbaguna BPSDM Pontianak"
                    className=" bg-cover w-full h-full rounded-bl-[200px] rounded-tr-[200px]"
                />
                <div className="absolute bottom-32 -left-10  py-2 px-2 bg-white rounded-md">
                    <h1 className="font-bold text-sm flex gap-2">
                        <div className="py-1 px-1 bg-accent rounded-full">
                            <TiTick className="text-white" />
                        </div>
                        Up To Date
                    </h1>
                    <p className="text-sm text-customGray">
                        Fasilitas Yang Lengkap <br /> Dan Mudah Di Dapat
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
