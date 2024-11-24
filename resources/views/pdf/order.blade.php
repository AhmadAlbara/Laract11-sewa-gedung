{{-- resources/views/pdf/order.blade.php --}}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order PDF</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            color: #333;
        }

        h1 {
            text-align: center;
            color: #2C3E50;
        }

        p {
            line-height: 1.6;
            margin: 10px 0;
        }

        .summary {
            border: 1px solid #BDC3C7;
            padding: 15px;
            border-radius: 5px;
            background-color: #F4F6F7;
            margin-top: 20px;
        }

        .footer {
            margin-top: 30px;
            font-size: 0.9em;
            text-align: center;
            color: #7F8C8D;
        }

        .highlight {
            background-color: #EAEDED;
            padding: 5px;
            border-radius: 3px;
        }
    </style>
</head>
<body>

    <h1>Pemesanan Aula Berhasil</h1>
    <p>Hi <strong>{{ $order->nama_pemesan }}</strong>,</p>
    <p>Selamat, Anda berhasil melakukan pendaftaran pemesanan aula secara online pada tanggal <strong>{{ $order->tanggal_pemakaian }}</strong>.</p>

    <div class="summary">
        <h2>Ringkasan Data Pemesanan</h2>
        <p>Nomor Pendaftaran : <span class="highlight">{{ $order->id }}</span></p>
        <p>Nama Pemesan : <span class="highlight">{{ $order->nama_pemesan }}</span></p>
        <p>No. Telepon : <span class="highlight">{{ $order->no_telp_pemesan }}</span></p>
        <p>Email : <span class="highlight">{{ $order->email }}</span></p>
        <p>Keperluan : <span class="highlight">{{ $order->keperluan }}</span></p>
    </div>

    <p>Lakukan konfirmasi pemesanan aula secara offline ke BPSDM Provinsi Kalimantan Barat pada saat jam operasional di hari SENIN - JUMAT pukul 07:15 WIB s/d pukul 11:00 WIB dan pukul 13:00 WIB s/d pukul 15:00 WIB.</p>
    <p>Batas konfirmasi pemesanan aula maksimal 3 hari setelah pemesanan online! Terimakasih.</p>

    <div class="footer">
        &copy; {{ date('Y') }} BPSDM Provinsi Kalimantan Barat
    </div>
</body>
</html>
