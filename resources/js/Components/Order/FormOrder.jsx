import React, { useState } from "react";
import InputField from "../InputField";

const FormOrder = () => {
    const [formData, setFormData] = useState({
        namaPemesan: "",
        noTelpPemesan: "",
        email: "",
        tanggalPemakaian: "",
        gedung: "",
        namaPemakai: "",
        noTelpPemakai: "",
        alamat: "",
        keperluan: "",
        waktuPemakaian: "", // New field for session (Pagi, Siang, Full 1 Hari)
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
                        <InputField
                            label="Gedung yang Dipesan"
                            name="gedung"
                            value={formData.gedung}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="lg:w-1/2 space-y-4">
                        <InputField
                            label="Nama Pemakai"
                            name="namaPemakai"
                            value={formData.namaPemakai}
                            onChange={handleChange}
                        />
                        <InputField
                            label="No. Telepon Pemakai"
                            name="noTelpPemakai"
                            type="number"
                            value={formData.noTelpPemakai}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Alamat Pemakai"
                            name="alamat"
                            value={formData.alamat}
                            onChange={handleChange}
                        />

                        {/* New select dropdown for choosing time of use */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-secondary">
                                Waktu Pemakaian
                            </label>
                            <select
                                name="waktuPemakaian"
                                value={formData.waktuPemakaian}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                                required
                            >
                                <option value="">Pilih Waktu Pemakaian</option>
                                <option value="Pagi">Pagi</option>
                                <option value="Siang">Siang</option>
                                <option value="Full 1 Hari">Full 1 Hari</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-secondary">
                                Keperluan
                            </label>
                            <textarea
                                name="keperluan"
                                value={formData.keperluan}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                                rows="3"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="py-2 px-10 bg-accent text-white rounded-md flex gap-2 font-bold items-center hover:scale-105"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormOrder;
