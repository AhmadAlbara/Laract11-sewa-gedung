import React, { useEffect, useState } from "react";
import InputField from "../InputField";
import Swal from "sweetalert2";
import { useForm } from "@inertiajs/react";

const FormOrder = ({ gedungs, orderId }) => {
    const { data, setData, post, processing, errors } = useForm({
        nama_pemesan: "",
        no_telp_pemesan: "",
        email: "",
        tanggal_pemakaian: "",
        gedung_id: "",
        keperluan: "",
    });
    const handleConfirm = () => {
        if (orderId) {
            window.location.href = `/order/${orderId}/download-pdf`;
        } else {
            Swal.fire("Error", "Order ID tidak ditemukan", "error");
        }
    };

    useEffect(() => {
        if (orderId) {
            Swal.fire({
                title: "Success",
                text: "Berhasil Menambahkan Order. Klik unduh untuk menyimpan PDF.",
                icon: "success",
                confirmButtonText: "Unduh PDF",
                cancelButtonText: "Tutup",
            }).then((result) => {
                if (result.isConfirmed) {
                    handleConfirm();
                }
            });
        }
    }, [orderId]);

    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);

        if (name === "tanggal_pemakaian") {
            const today = new Date();
            const selectedDate = new Date(value);
            today.setHours(0, 0, 0, 0);
            selectedDate.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                setErrorMessage("Tanggal Pemakaian Tidak Valid");
            } else {
                setErrorMessage("");
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/order", {
            onSuccess: () => {
                setData({
                    nama_pemesan: "",
                    no_telp_pemesan: "",
                    email: "",
                    tanggal_pemakaian: "",
                    gedungs_id: "",
                    keperluan: "",
                });
            },
            onError: () => {
                Swal.fire("Error", "Gagal Menambahkan Order", "error");
            },
        });
    };

    return (
        <div className="w-full mx-auto p-8 rounded-md">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="lg:flex lg:space-x-6 space-y-6 lg:space-y-0">
                    <div className="lg:w-1/2 space-y-4">
                        <InputField
                            label="Nama Pemesan"
                            name="nama_pemesan"
                            value={data.nama_pemesan}
                            onChange={handleChange}
                        />
                        {errors.nama_pemesan && (
                            <div className="text-red-500 text-sm">
                                {errors.nama_pemesan}
                            </div>
                        )}
                        <InputField
                            label="No. Telepon Pemesan"
                            name="no_telp_pemesan"
                            type="tel"
                            value={data.no_telp_pemesan}
                            onChange={handleChange}
                        />
                        {errors.no_telp_pemesan && (
                            <div className="text-red-500 text-sm">
                                {errors.no_telp_pemesan}
                            </div>
                        )}
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            value={data.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <div className="text-red-500 text-sm">
                                {errors.email}
                            </div>
                        )}
                        <InputField
                            label="Tanggal Pemakaian"
                            name="tanggal_pemakaian"
                            type="date"
                            value={data.tanggal_pemakaian}
                            onChange={handleChange}
                        />
                        {errors.tanggal_pemakaian && (
                            <div className="text-red-500 text-sm">
                                {errors.tanggal_pemakaian}
                            </div>
                        )}
                        {errorMessage && (
                            <div className="text-red-500 text-sm">
                                {errorMessage}
                            </div>
                        )}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-secondary">
                                Gedung yang Dipesan
                            </label>
                            <select
                                name="gedungs_id"
                                value={data.gedungs_id}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                                required
                            >
                                <option value="">Pilih Gedung</option>
                                {gedungs.map((gedung) => (
                                    <option key={gedung.id} value={gedung.id}>
                                        {gedung.name}
                                    </option>
                                ))}
                            </select>
                            {errors.gedungs_id && (
                                <div className="text-red-500 text-sm">
                                    {errors.gedungs_id}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:w-1/2 space-y-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-secondary">
                                Keperluan
                            </label>
                            <textarea
                                name="keperluan"
                                value={data.keperluan}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border resize-none border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                                rows="14"
                                required
                            />
                            {errors.keperluan && (
                                <div className="text-red-500 text-sm">
                                    {errors.keperluan}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="py-2 px-10 bg-accent text-white rounded-md flex gap-2 font-bold items-center hover:scale-105"
                        disabled={processing || !!errorMessage}
                    >
                        {processing ? "Processing..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormOrder;
