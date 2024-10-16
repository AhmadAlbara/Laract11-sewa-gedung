<?php

namespace App\Http\Controllers;

use App\Models\Gedungs;
use App\Http\Requests\StoreGedungsRequest;
use App\Http\Requests\UpdateGedungsRequest;
use Inertia\Inertia;

class GedungsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('AddGedungs');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGedungsRequest $request)
    {
        Gedungs::create($request->all());
        return redirect()->route('order.index')->with('success', 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Gedungs $gedungs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gedungs $gedungs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGedungsRequest $request, Gedungs $gedungs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gedungs $gedungs)
    {
        //
    }
}
