import React, { useState } from "react";
import LandingLayout from "@/Layouts/LandingLayout";
import { Head, useForm } from "@inertiajs/react"; // Gunakan useForm dari Inertia
import InputField from "@/Components/elements/InputField";
import Swal from "sweetalert2";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const AddGedungs = ({ auth }) => {
    const user = auth.user;

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        price: "",
    });

    // State tambahan untuk tampilan harga yang sudah diformat
    const [formattedPrice, setFormattedPrice] = useState("");

    const handlePriceChange = (e) => {
        // Ambil nilai mentah dari input
        const rawValue = e.target.value.replace(/[^\d]/g, ""); // Hapus karakter non-angka
        setData("price", rawValue); // Simpan angka mentah ke state

        // Format angka ke format Indonesia
        const formatted = parseInt(rawValue || 0, 10).toLocaleString("id-ID");
        setFormattedPrice(formatted); // Perbarui tampilan yang diformat
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/gedung", {
            onSuccess: () => {
                Swal.fire("Success", "Berhasil Menambahkan Gedung", "success");
            },
            onError: () => {
                Swal.fire("Error", "Gagal Menambahkan Gedung", "error");
            },
        });
    };

    return (
        <AuthenticatedLayout user={user}>
            <Head title="Tambah Gedung" />
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
                <h1 className="text-xl font-semibold mb-4">Tambah Gedung</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField
                        label="Nama Gedung"
                        name="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        error={errors.name}
                    />
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
                        />
                        {errors.price && (
                            <p className="text-red-500 text-sm">
                                {errors.price}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            disabled={processing} // Nonaktifkan saat sedang memproses
                        >
                            {processing ? "Menyimpan..." : "Simpan"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default AddGedungs;
