import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import InputField from "@/Components/elements/InputField";
import Swal from "sweetalert2";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const EditGedungs = ({ auth, gedung }) => {
    const user = auth.user;

    // Inisialisasi state form dengan data awal
    const { data, setData, put, processing, errors } = useForm({
        name: gedung.name || "", // Nama gedung
        price: gedung.price || "", // Harga gedung
    });

    // State untuk menampilkan harga dalam format Indonesia
    const [formattedPrice, setFormattedPrice] = useState(
        parseInt(gedung.price || 0, 10).toLocaleString("id-ID")
    );

    // Fungsi untuk meng-handle perubahan harga
    const handlePriceChange = (e) => {
        const rawValue = e.target.value.replace(/[^\d]/g, ""); // Hanya angka
        setData("price", rawValue); // Simpan angka mentah
        setFormattedPrice(
            parseInt(rawValue || 0, 10).toLocaleString("id-ID") // Format untuk tampilan
        );
    };

    // Fungsi submit untuk update data
    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/gedung/${gedung.id}`, {
            onSuccess: () => {
                Swal.fire("Success", "Berhasil Mengupdate Gedung", "success");
            },
            onError: () => {
                Swal.fire("Error", "Gagal Mengupdate Gedung", "error");
            },
        });
    };

    return (
        <AuthenticatedLayout user={user}>
            <Head title="Edit Gedung" />
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
                <h1 className="text-xl font-semibold mb-4">Edit Gedung</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Input Nama Gedung */}
                    <InputField
                        label="Nama Gedung"
                        name="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        error={errors.name}
                    />

                    {/* Input Harga Gedung */}
                    <div>
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Harga Gedung
                        </label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            value={formattedPrice}
                            onChange={handlePriceChange}
                            className={`mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                                errors.price ? "border-red-500" : ""
                            }`}
                            placeholder="Masukkan harga"
                        />
                        {errors.price && (
                            <p className="text-red-500 text-sm">
                                {errors.price}
                            </p>
                        )}
                    </div>

                    {/* Tombol Submit */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            disabled={processing} // Nonaktifkan tombol saat memproses
                        >
                            {processing ? "Menyimpan..." : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditGedungs;
