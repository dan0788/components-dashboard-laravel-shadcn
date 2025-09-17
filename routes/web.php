<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PersonalInfoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return Inertia::render('welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

/* Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard'); */

Route::middleware(['auth', 'verified'])->prefix('home')->group(function () {
    Route::get('/', function () {
        return Inertia::render('home');
    })->name('home');

    Route::get('/components', function () {
        return Inertia::render('components');
    })->name('components.show');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::patch('/profile', [PersonalInfoController::class, 'update'])->name('personalInfo.update');
    //ruta para eliminar cualquier usuario
    //Route::delete('/profile', [PersonalInfoController::class, 'delete'])->name('personalInfo.delete');

});



require __DIR__ . '/auth.php';
