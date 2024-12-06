<?php

use App\Http\Controllers\GedungsController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ScheduleController;
use App\Models\Gedungs;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/schedule', function () {
    return Inertia::render('Schedule');
});
Route::get('/order/{order}/download-pdf', [OrdersController::class, 'generatePdf']);


Route::resource('order', OrdersController::class);
Route::resource('gedung', GedungsController::class);
Route::resource('schedule', ScheduleController::class);

Route::post('/pesanan/confirm/{id}', [OrdersController::class, 'confirm'])->name('pesanan.confirm');
Route::delete('/pesanan/delete/{id}', [OrdersController::class, 'destroy'])->name('pesanan.delete');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/index');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/pesanan', [OrdersController::class, 'adminDashboard'])->name('admin.dashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/orders/delete-pending', [OrdersController::class, 'deletePendingOrders'])
    ->name('orders.deletePending')
    ->middleware('auth');
require __DIR__ . '/auth.php';
