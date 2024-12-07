import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FaChartBar, FaBuilding, FaReceipt } from "react-icons/fa";

export default function Dashboard({
    totalGedung,
    totalPesanan,
    pesananAktif,
    totalPemasukan,
    pesananTerbaru,
    auth
}) {

    const user = auth.user;
    return (
        <AuthenticatedLayout user={user}>
            <Head title="Dashboard" />

            <div className="p-8 ">
                <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

                <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                        <FaBuilding className="text-blue-500 text-3xl mr-4" />
                        <div>
                            <h2 className="text-lg font-bold">{totalGedung}</h2>
                            <p className="text-sm text-gray-600">
                 b               Total Gedung
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                        <FaReceipt className="text-green-500 text-3xl mr-4" />
                        <div>
                            <h2 className="text-lg font-bold">
                                {totalPesanan}
                            </h2>
                            <p className="text-sm text-gray-600">
                                Total Pesanan
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                        <FaChartBar className="text-yellow-500 text-3xl mr-4" />
                        <div>
                            <h2 className="text-lg font-bold">
                                {pesananAktif}
                            </h2>
                            <p className="text-sm text-gray-600">
                                Pesanan Aktif
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                        <FaChartBar className="text-purple-500 text-3xl mr-4" />
                        <div>
                            <h2 className="text-lg font-bold">
                                Rp{" "}
                                {Number(totalPemasukan).toLocaleString("id-ID")}
                            </h2>
                            <p className="text-sm text-gray-600">
                                Total Pemasukan
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tabel Pesanan Terbaru */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-4">Pesanan Terbaru</h2>
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">
                                    Nama Pemesan
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    Gedung
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    Tanggal
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    Keperluan
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pesananTerbaru.map((pesanan, index) => (
                                <tr
                                    key={index}
                                    className={`${
                                        index % 2 === 0
                                            ? "bg-gray-50"
                                            : "bg-white"
                                    }`}
                                >
                                    <td className="border border-gray-300 px-4 py-2">
                                        {pesanan.nama_pemesan}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {pesanan.gedung.name}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {pesanan.tanggal_pemakaian}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {pesanan.keperluan}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {pesanan.is_active
                                            ? "Aktif"
                                            : "Tidak Aktif"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
