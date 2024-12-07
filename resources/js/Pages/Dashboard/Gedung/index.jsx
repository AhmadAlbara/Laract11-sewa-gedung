import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";
import { FaBuilding } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

const Gedung = ({ auth, gedungs }) => {
    const user = auth.user;

    return (
        <AuthenticatedLayout user={user}>
            <Head title="Gedung" />
            <div className="bg-white p-8 rounded-md shadow-lg ">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                    <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-700">
                        <FaBuilding className="text-accent" />
                        Gedung
                    </h1>
                    <Link
                        href={route("gedung.create")}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        <IoMdAdd />
                        <span>Tambah Gedung</span>
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-sm text-left border-collapse border border-gray-200 shadow-md">
                        <thead className="bg-gray-100 text-gray-700 uppercase">
                            <tr>
                                <th className="border border-gray-300 px-4 py-3 text-center">
                                    No
                                </th>
                                <th className="border border-gray-300 px-4 py-3">
                                    Nama Gedung
                                </th>
                                <th className="border border-gray-300 px-4 py-3">
                                    Harga
                                </th>
                                <th className="border border-gray-300 px-4 py-3 text-center">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gedungs.length > 0 ? (
                                gedungs.map((gedung, index) => (
                                    <tr
                                        key={gedung.id}
                                        className={`${
                                            index % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
                                        } hover:bg-gray-100 transition`}
                                    >
                                        <td className="border border-gray-300 px-4 py-2 text-center font-medium text-gray-700">
                                            {index + 1}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-gray-700">
                                            {gedung.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-gray-700">
                                            Rp{" "}
                                            {gedung.price.toLocaleString(
                                                "id-ID"
                                            )}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            <Link
                                                href={route(
                                                    "gedung.edit",
                                                    gedung.id
                                                )}
                                                className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition"
                                            >
                                                Edit
                                            </Link>
                                            <span className="mx-2">|</span>
                                            <Link
                                                href={route(
                                                    "gedung.destroy",
                                                    gedung.id
                                                )}
                                                method="delete"
                                                as="button"
                                                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                            >
                                                Hapus
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                                    >
                                        Tidak ada data gedung.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Gedung;
