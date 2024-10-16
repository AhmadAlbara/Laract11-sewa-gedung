import React, { useState } from "react";
import LandingLayout from "@/Layouts/LandingLayout";
import { Head, useForm } from "@inertiajs/react"; // Gunakan useForm dari Inertia
import InputField from "@/Components/InputField";
import Swal from "sweetalert2";


const AddGedungs = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        price: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
       e.preventDefault();
       post("/gedungs", {
           onSuccess: () => {
               Swal.fire("Success", "Berhasil Menambahkan Gedung", "success");
           },
           onError: () => {
               Swal.fire("Error", "Gagal Menambahkan Gedung", "error");
           },
       });
    };

    return (
        <LandingLayout>
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
                    <InputField
                        label="Harga Gedung"
                        name="price"
                        type="number"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                        required
                        error={errors.price}
                    />
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
        </LandingLayout>
    );
};

export default AddGedungs;
