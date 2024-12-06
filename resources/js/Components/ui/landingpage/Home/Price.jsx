import { Link } from "@inertiajs/react";
import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { LuMinus } from "react-icons/lu";

const Price = () => {
    return (
        <section className="   bg-accent w-full " id="price">
            <div className="flex items-center h-[80vh]  max-w-7xl mx-auto gap-10 text-secondary ">
                <div className="w-2/3 text-white">
                    <h1 className="text-4xl font-bold">
                        Paket Gedung{" "}
                        <span className="text-customYellow">
                            {" "}
                            Aula <span className="text-white">
                                Serbaguna
                            </span>{" "}
                            BPSDM{" "}
                        </span>
                        Pontianak
                    </h1>
                    <p className="text-white  text-lg mt-5 capitalize w-[600px]">
                        Terdapat Dua Paket Yang berbeda yaitu paket 1 dan paket
                        2 silahkan pilih berdasarkan kebutuhan kegiatan atau
                        acara kamu
                    </p>
                </div>
                <div className="w-1/2 flex gap-10 h-[80vh] relative  mt-48">
                    <div className="text-center h-[500px] bg-white rounded-md px-10  py-5  shadow-2xl  ">
                        <h1 className="text-accent font-bold text-md">
                            PAKET 1
                        </h1>
                        <h2 className="text-2xl font-bold mt-4">
                            Rp. 2.000.000
                        </h2>
                        <p className="mt-4 text-sm text-customGray">
                            Paket 1 Full Fasilitas <br /> Semua Fasilitas
                            Tersedia
                        </p>
                        <div className="mt-4 space-y-7">
                            <h1 className="font-bold text-sm flex gap-2">
                                <div className="py-1 px-1 bg-accent rounded-full">
                                    <TiTick className="text-white" />
                                </div>
                                Dekorasi
                            </h1>
                            <h1 className="font-bold text-sm flex gap-2">
                                <div className="py-1 px-1 bg-accent rounded-full">
                                    <TiTick className="text-white" />
                                </div>
                                Sound Sistem
                            </h1>
                            <h1 className="font-bold text-sm flex gap-2">
                                <div className="py-1 px-1 bg-accent rounded-full">
                                    <TiTick className="text-white" />
                                </div>
                                Chatering
                            </h1>
                            <h1 className="font-bold text-sm flex gap-2">
                                <div className="py-1 px-1 bg-accent rounded-full">
                                    <TiTick className="text-white" />
                                </div>
                                Tenda Tambahan
                            </h1>
                            <h1 className="font-bold text-sm flex gap-2">
                                <div className="py-1 px-1 bg-accent rounded-full">
                                    <TiTick className="text-white" />
                                </div>
                                Snack
                            </h1>
                        </div>
                        <Link className="py-2 px-4 mt-10 justify-center bg-accent text-white rounded-md flex gap-2 font-bold items-center  hover:scale-105">
                            Paket 1
                            <IoIosArrowDroprightCircle />
                        </Link>
                    </div>

                    <div className="text-center h-[500px] bg-white rounded-md px-10 py-5  shadow-2xl  ">
                        <h1 className="text-accent font-bold text-md">
                            PAKET 2
                        </h1>
                        <h2 className="text-2xl font-bold mt-4">
                            Rp. 1.000.000
                        </h2>
                        <p className="mt-4 text-sm text-customGray">
                            Paket 2 Pilih Salah Satu <br /> Fasilitas Yang
                            Tersedia
                        </p>
                        <div className="mt-4 space-y-7">
                            <h1 className="font-bold text-sm flex gap-2">
                                <div className="py-1 px-1 bg-customYellow rounded-full">
                                    <LuMinus className="text-white" />
                                </div>
                                Dekorasi
                            </h1>
                            <h1 className="font-bold text-sm flex gap-2">
                                <div className="py-1 px-1 bg-customYellow rounded-full">
                                    <LuMinus className="text-white" />
                                </div>
                                Sound Sistem
                            </h1>
                            <h1 className="font-bold text-sm flex gap-2">
                                <div className="py-1 px-1 bg-customYellow rounded-full">
                                    <LuMinus className="text-white" />
                                </div>
                                Chatering
                            </h1>
                            <h1 className="font-bold text-sm flex gap-2">
                                <div className="py-1 px-1 bg-customYellow rounded-full">
                                    <LuMinus className="text-white" />
                                </div>
                                Tenda Tambahan
                            </h1>
                            <h1 className="font-bold text-sm flex gap-2">
                                <div className="py-1 px-1 bg-customYellow rounded-full">
                                    <LuMinus className="text-white" />
                                </div>
                                Snack
                            </h1>
                        </div>
                        <Link className="py-2 px-4 mt-10 justify-center bg-accent text-white rounded-md flex gap-2 font-bold items-center  hover:scale-105">
                            Paket 2
                            <IoIosArrowDroprightCircle />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;
