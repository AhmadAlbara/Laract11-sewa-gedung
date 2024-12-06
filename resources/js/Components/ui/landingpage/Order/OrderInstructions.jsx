const OrderInstructions = () => {
    return (
        <div className="w-2/3 p-6 h-fit  bg-gray-100 border border-gray-300 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-accent">
                Petunjuk Pemesanan:
            </h2>
            <ol className="list-decimal space-y-4 mb-4 pl-6 text-gray-700">
                <li>
                    Silakan isi identitas Anda dengan benar karena akan digunakan pada saat verifikasi.
                </li>
                <li>
                    Setelah berhasil melakukan pemesanan, lakukan verifikasi
                    paling lambat 7 hari setelah pemesanan, dengan cara datang
                    langsung pada jam kerja ke{" "}
                    <strong>
                        Ruang Layanan Informasi BPSDMD Provinsi Kalimantan Barat
                    </strong>{" "}
                    dan menunjukkan bukti cetak pemesanan online.
                </li>
                <li>
                    Jika dalam waktu 7 hari Anda belum melakukan verifikasi,
                    data pemesanan Anda akan dihapus.
                </li>
                <li>
                    Pelunasan biaya sewa gedung dilakukan paling lambat 60 hari
                    sebelum tanggal pemakaian. Apabila melebihi batas waktu
                    tersebut maka pemesanan akan dibatalkan.
                </li>
                <li>Apabila terjadi pembatalan segera hubungi petugas.</li>
            </ol>
        </div>
    );
};

export default OrderInstructions;
