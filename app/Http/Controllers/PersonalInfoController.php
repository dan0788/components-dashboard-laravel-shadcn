<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class PersonalInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function show(Request $request)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        // 1. Obtener el usuario autenticado.
        // El Request ya tiene un método user() que devuelve el usuario
        // autenticado si la ruta está protegida por middleware 'auth'.

        $validatedData = $request->validate([
            'firstname' => ['string', 'max:255', 'regex:/^[a-zA-Z0-9\s]*$/', 'nullable'],
            'lastname' => ['string', 'max:255', 'regex:/^[a-zA-Z0-9\s]*$/', 'nullable'],
            'avatar' => ['string', 'nullable'], // Suponiendo que el avatar es una URL o un path.
            'dateofbirth' => ['date_format:Y-m-d', 'nullable'],
            'sex' => ['string', 'nullable', Rule::in(['Male', 'Female'])],
            'contact' => ['array', 'nullable'],
            'contact.type' => ['string', 'nullable', Rule::in(['cellphone', 'landphone'])],
            'contact.country' => ['string', 'nullable'],
            'contact.prefix' => ['string', 'nullable'],
            'contact.number' => ['string', 'nullable'],
            'notifications' => ['boolean', 'nullable'],
        ]);

        $user = $request->user();
        $contactData = $validatedData['contact'];
        unset($validatedData['contact']);

        $user->update($validatedData);

        Contact::updateOrCreate(
            ['user_id' => $user->id], // Criterio de búsqueda: el id del usuario
            $contactData             // Datos a crear o actualizar
        );
        $user->contact()->update($contactData);

        return Redirect::back()->with('status', 'profile-updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}