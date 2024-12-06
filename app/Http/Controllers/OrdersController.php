<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use App\Http\Requests\StoreOrdersRequest;
use App\Http\Requests\UpdateOrdersRequest;
use App\Models\Gedungs;
use Barryvdh\DomPDF\PDF;
use Carbon\Carbon;
use Inertia\Inertia;


class OrdersController extends Controller
{
    public function generatePdf(Orders $order, PDF $pdf)
    {
        $gedung = $order->gedung; 
        $pdf = $pdf->loadView('pdf.order', compact('order', 'gedung'));
        return $pdf->stream();
    }
    public function index()
    {
        $gedungs = Gedungs::all();
        $orderId = session('orderId');

        return Inertia::render("Order", [
            'gedungs' => $gedungs,
            'orderId' => $orderId, 
        ]);
      
    }


    public function store(StoreOrdersRequest $request)
    {
        $order = Orders::create($request->all());
        $orderId = $order->id;

      
         return redirect()->route('order.index')->with([
        'success' => 'Product created successfully.',
        'orderId' => $orderId,
    ]);
    }

    public function adminDashboard()
    {
        $orders = Orders::with('gedung')->latest()->get(); 
        return Inertia::render('Dashboard/Order/index', [
            'orders' => $orders,
        ]);
    }
    public function confirm($id)
    {
        $order = Orders::findOrFail($id);
        $order->is_active = true; 
        $order->save();

        return redirect()->back()->with('success', 'Pesanan berhasil dikonfirmasi!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Orders $orders)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Orders $orders)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrdersRequest $request, Orders $orders)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $order = Orders::findOrFail($id);
        $order->delete();

        return redirect()->back()->with('success', 'Pesanan berhasil dihapus!');
    }

    public function deletePendingOrders()
    {
      
        $orders = Orders::where('is_active', 0)
        ->where('created_at', '<', Carbon::now()->subDays(3))
            ->get();

        foreach ($orders as $order) {
            $order->delete(); 
        }

        return redirect()->route('order.index')->with('success', 'Pesanan yang tidak dikonfirmasi dalam 3 hari telah dihapus.');
    }
}
