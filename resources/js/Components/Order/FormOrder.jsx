// /resources/js/Components/Order/FormOrder.jsx

import React, { useState } from "react";
import InputField from "../InputField";

const FormOrder = ({ gedungs }) => {
    // Terima gedungs sebagai prop
 // Pastikan gedungs diterima dengan benar

    const [formData, setFormData] = useState({
        namaPemesan: "",
        noTelpPemesan: "",
        email: "",
        tanggalPemakaian: "",
        gedung: "",
        keperluan: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "tanggalPemakaian") {
            const today = new Date();
            const selectedDate = new Date(value);

            if (selectedDate < today) {
                setErrorMessage("Tanggal Pemakaian Tidak Valid");
            } else {
                setErrorMessage("");
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Tambahkan logika untuk mengirim data ke backend
    };

    return (
        <div className="w-full mx-auto p-8 rounded-md">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="lg:flex lg:space-x-6 space-y-6 lg:space-y-0">
                    <div className="lg:w-1/2 space-y-4">
                        <InputField
                            label="Nama Pemesan"
                            name="namaPemesan"
                            value={formData.namaPemesan}
                            onChange={handleChange}
                        />
                        <InputField
                            label="No. Telepon Pemesan"
                            name="noTelpPemesan"
                            type="tel"
                            value={formData.noTelpPemesan}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Tanggal Pemakaian"
                            name="tanggalPemakaian"
                            type="date"
                            value={formData.tanggalPemakaian}
                            onChange={handleChange}
                        />
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
                                name="gedung"
                                value={formData.gedung}
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
                        </div>
                    </div>

                    <div className="lg:w-1/2 space-y-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-secondary">
                                Keperluan
                            </label>
                            <textarea
                                name="keperluan"
                                value={formData.keperluan}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border resize-none border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                                rows="14"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="py-2 px-10 bg-accent text-white rounded-md flex gap-2 font-bold items-center hover:scale-105"
                        disabled={!!errorMessage}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormOrder;
