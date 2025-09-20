<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientsController extends Controller
{

    public function index()
    {
        $head = 'Search Client';
        $companies = Company::with('client:id,firstname,lastname,email')
            ->select(
                'uid',
                'company_name',
                'direction',
                'ramp',
                'braille_language',
                'elevator',
                'first_aid_kit',
                'sign_language',
                'private_transportation',
                'information_places',
                'client_id',
            )
            ->get();

        return Inertia::render('clients/searchClient', [
            'head' => $head,
            'companies' => $companies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(/* Client $client */)
    {
        return Inertia::render('clients/editClient');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Client $client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        //
    }
}
