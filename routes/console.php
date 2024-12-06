<?php

use App\Models\Orders;
use Carbon\Carbon;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();
$schedule->call(function () {
    // Mendapatkan pesanan yang belum dikonfirmasi selama lebih dari 3 hari dan menghapusnya
    Orders::where('is_active', 0)
        ->where('created_at', '<', Carbon::now()->subDays(3))
        ->delete();
})->daily();