<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Validation\ValidationException;

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

        $userPinCifrado = $request->user()->pin;

        if (!$userPinCifrado) {
             throw ValidationException::withMessages([
                'current_pin' => 'No se ha configurado un PIN actual.',
            ]);
        }

        try {
            $decryptedPin = Crypt::decryptString($userPinCifrado);
            
            if ($decryptedPin !== $request->current_pin) {
                throw ValidationException::withMessages([
                    'current_pin' => 'El PIN actual no es válido.',
                ]);
            }
        } catch (\Illuminate\Contracts\Encryption\DecryptException $e) {
            // Manejar un error si el PIN no se puede descifrar (posible corrupción de datos).
            throw ValidationException::withMessages([
                'current_pin' => 'Error de validación del PIN. Intenta de nuevo.',
            ]);
        }

        // 3. Cifrar el nuevo PIN y actualizar la base de datos.
        $encryptedNewPin = Crypt::encryptString($request->pin);
        
        $request->user()->update([
            'pin' => $encryptedNewPin,
        ]);

        return back()->with('status', 'El PIN ha sido actualizado correctamente.');
    }
}