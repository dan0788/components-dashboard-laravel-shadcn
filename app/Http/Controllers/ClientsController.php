<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Company;
use App\Models\CompanyType;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class ClientsController extends Controller
{

    public function index()
    {
        $companies = Company::with('client:id,firstname,lastname,email,email_verified_at')
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
        $company = Company::where('client_id', $client->id)
            ->with('company_type:id,type')
            ->select(
                'id',
                'company_type_id',
                'company_name',
                'direction',
                'country',
                'province',
                'city',
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
        $validator = Validator::make($request->all(), [
            "firstname" => 'string|required',
            "lastname" => 'string|required',
            "email" => 'string|required',
            "company_name" => 'string|required',
            "country" => 'string|required',
            "province" => 'string|required',
            "city" => 'string|required',
            "direction" => 'string|required',
            "ramp" => 'boolean|required',
            "braille_language" => 'boolean|required',
            "elevator" => 'boolean|required',
            "first_aid_kit" => 'boolean|required',
            "accessible_bathroom" => 'boolean|required',
            "sign_language" => 'boolean|required',
            "private_transportation" => 'boolean|required',
            "information_places" => 'boolean|required',
            "type" => 'in:Entertainment,Food,Transportation,Beverage,General trade,Services',
        ]);
        if ($validator->fails()) {
            // Return the validation errors
            //print('error');
            return response()->json($validator->errors(), 422);
        }
        $client->update($request->only(['firstname', 'lastname', 'email']));

        //obtener viejo id type
        $oldCompanyTypeID = Company::where('client_id', $client->id)
            ->with('company_type:id,type')
            ->select(
                'id',
                'company_type_id',
            )
            ->first();
        //obtener nuevo id type
        $newCompanyTypeID = CompanyType::where('type', $request->type)
            ->select('id')
            ->firstOrFail();
        Company::where('company_type_id', $oldCompanyTypeID->id)
            ->update(['company_type_id' => $newCompanyTypeID->id]);

        $companyData = $request->only([
            'company_name',
            'direction',
            'country',
            'province',
            'city',
            'ramp',
            'braille_language',
            'elevator',
            'first_aid_kit',
            'sign_language',
            'accessible_bathroom',
            'private_transportation',
            'information_places',
        ]);

        $client->company->update($companyData);

        return redirect()->route('client.edit', $client->id)->with('success', 'Client and Company updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        //
    }
}
