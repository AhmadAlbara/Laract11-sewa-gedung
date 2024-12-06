import { Link } from "@inertiajs/react";
import Swal from "sweetalert2";
import { FaCheck, FaTrashAlt, FaDownload } from "react-icons/fa"; // Import react-icons
import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

const Order = ({ auth, orders }) => {
    const user = auth.user;
    const [search, setSearch] = useState(""); // State untuk pencarian

    // Fungsi untuk mengonfirmasi pesanan
    const handleConfirm = (id) => {
        Swal.fire({
            title: "Konfirmasi Pesanan?",
            text: "Apakah Anda yakin ingin mengonfirmasi pesanan ini?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Konfirmasi!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(`/pesanan/confirm/${id}`, null, {
                    onSuccess: () => {
                        Swal.fire(
                            "Terkonfirmasi!",
                            "Pesanan berhasil dikonfirmasi.",
                            "success"
                        );
                    },
                });
            }
        });
    };

    const handleDownloadPdf = (orderId) => {
        window.location.href = `/order/${orderId}/download-pdf`;
    };

    // Fungsi untuk menghapus pesanan
    const handleDelete = (id) => {
        Swal.fire({
            title: "Hapus Pesanan?",
            text: "Pesanan yang dihapus tidak dapat dikembalikan.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Hapus!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/pesanan/delete/${id}`, {
                    onSuccess: () => {
                        Swal.fire(
                            "Terhapus!",
                            "Pesanan berhasil dihapus.",
                            "success"
                        );
                    },
                });
            }
        });
    };

    // Filter pesanan berdasarkan nama pemesan
    const filteredOrders = orders.filter((order) =>
        order.nama_pemesan.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AuthenticatedLayout user={user}>
            <Head title="Pesanan" />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Daftar Pesanan
                </h1>

                {/* Input pencarian dengan desain minimalis */}
                <input
                    type="text"
                    placeholder="Cari Pesanan..."
                    className="px-4 py-2 border rounded-md w-full max-w-xs mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredOrders.map((order) => (
                        <div
                            key={order.id}
                            className={`p-6 bg-white rounded-lg shadow-md relative transition-all duration-200 ease-in-out hover:shadow-lg ${
                                order.is_active
                                    ? "border-l-4 border-green-500"
                                    : "border-l-4 border-yellow-500"
                            }`}
                        >
                            {/* Tombol Hapus dan Download PDF - Posisi di kanan atas */}
                            <div className="absolute top-2 right-2 flex gap-2">
                                {/* Hapus */}
                                <button
                                    onClick={() => handleDelete(order.id)}
                                    className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
                                >
                                    <FaTrashAlt />
                                </button>

                                {/* Download PDF */}
                                <button
                                    onClick={() => handleDownloadPdf(order.id)}
                                    className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-200"
                                >
                                    <FaDownload />
                                </button>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900">
                                {order.nama_pemesan}
                            </h3>
                            <p className="text-sm text-gray-600">
                                Email: {order.email}
                            </p>
                            <p className="text-sm text-gray-600">
                                No. Telp: {order.no_telp_pemesan}
                            </p>
                            <p className="text-sm text-gray-600">
                                Keperluan: {order.keperluan}
                            </p>
                            <p className="text-sm text-gray-600">
                                Gedung: {order.gedung.name}
                            </p>
                            <p className="text-sm text-gray-600">
                                Harga: Rp{" "}
                                {parseInt(order.gedung.price).toLocaleString(
                                    "id-ID"
                                )}
                            </p>
                            <p className="text-sm text-gray-600">
                                Tanggal Pemakaian: {order.tanggal_pemakaian}
                            </p>

                            {/* Status */}
                            <div
                                className={`mt-3 px-3 py-1 text-xs font-semibold rounded-md inline-block ${
                                    order.is_active
                                        ? "bg-green-200 text-green-800"
                                        : "bg-yellow-200 text-yellow-800"
                                }`}
                            >
                                {order.is_active ? "Aktif" : "Pending"}
                            </div>

                            {/* Tombol Konfirmasi */}
                            <div className="mt-6 flex gap-4">
                                {!order.is_active && (
                                    <button
                                        onClick={() => handleConfirm(order.id)}
                                        className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        <FaCheck className="mr-2" />
                                        Konfirmasi
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Order;
