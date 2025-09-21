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
                'accessible_bathroom',
                'private_transportation',
                'information_places',
                'client_id',
            )
            ->get();

        return Inertia::render('clients/searchClient', [
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
    public function edit(Client $client)
    {
        $head = 'Edit Client';
        $company = Company::where('client_id', $client->id)
            ->with('company_type:id,type')
            ->select(
                'id',
                'company_type_id',
                'company_name',
                'direction',
                'ramp',
                'braille_language',
                'elevator',
                'first_aid_kit',
                'sign_language',
                'accessible_bathroom',
                'private_transportation',
                'information_places',
            )
            ->first();

        return Inertia::render('clients/editClient', [
            'head' => $head,
            'client' => $client->only([
                'id',
                'firstname',
                'lastname',
                'email',
            ]),
            'company' => $company,
        ]);
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
