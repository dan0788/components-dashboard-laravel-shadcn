<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class PinController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_pin' => ['required', 'string', 'digits:6'], // El PIN actual debe ser de 6 dígitos
            'pin' => ['required', 'string', 'digits:6', 'confirmed'], // El nuevo PIN debe ser de 6 dígitos y coincidir con pin_confirmation
        ]);

        $request->user()->update([
            'pin' => $validated['password'],
        ]);

        return back();
    }
}