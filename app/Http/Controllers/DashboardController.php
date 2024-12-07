<?php

namespace App\Http\Controllers;

use App\Models\Gedungs;
use App\Models\Orders;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
 
        $totalGedung = Gedungs::count();

       
        $totalPesanan = Orders::count();

        $pesananAktif = Orders::where('is_active', 1)->count();

        $totalPemasukan = Orders::where('is_active', 1)
        ->join('gedungs', 'orders.gedungs_id', '=', 'gedungs.id')
        ->sum('gedungs.price');

     
        $pesananTerbaru = Orders::with('gedung')
            ->latest()
            ->take(10)
            ->get();

        // Return data ke frontend
        return inertia('Dashboard/index', [
            'totalGedung' => $totalGedung,
            'totalPesanan' => $totalPesanan,
            'pesananAktif' => $pesananAktif,
            'totalPemasukan' => $totalPemasukan,
            'pesananTerbaru' => $pesananTerbaru,
        ]);
    }
}
