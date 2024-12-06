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
        $gedungs = Gedungs::all();
        return Inertia::render('Dashboard/Gedung/index',[
            'gedungs' => $gedungs,
        ]);
    }


    public function create()
    {
        return Inertia::render('Dashboard/Gedung/AddGedungs');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGedungsRequest $request)
    {
        Gedungs::create($request->all());
        return redirect()->route('gedung.index')->with('success', 'Product created successfully.');
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
    public function edit($id)
    {
        $gedung = Gedungs::findOrFail($id);
        return Inertia::render('Dashboard/Gedung/EditGedungs', [
            'gedung' => $gedung,
        ]);
    
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGedungsRequest $request, $id)
    {
        $gedung = Gedungs::findOrFail($id);
        $gedung->update($request->all());
        return redirect()->route('gedung.index')->with('success', 'Gedung updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $gedung = Gedungs::findOrFail($id);
        $gedung->delete();
        return redirect()->route('gedung.index')->with('success', 'Gedung deleted successfully.');
    }
}
