<?php

use App\Http\Controllers\ProfileController;
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

    Route::get('/components/accordion', function () {
        return Inertia::render('components/accordion');
    })->name('components.accordion');
    Route::get('/components/alert', function () {
        return Inertia::render('components/alert');
    })->name('components.alert');
    Route::get('/components/alert-dialog', function () {
        return Inertia::render('components/alert-dialog');
    })->name('components.alert-dialog');
    Route::get('/components/aspect-ratio', function () {
        return Inertia::render('components/aspect-ratio');
    })->name('components.aspect-ratio');
    Route::get('/components/avatar', function () {
        return Inertia::render('components/avatar');
    })->name('components.avatar');
    Route::get('/components/badge', function () {
        return Inertia::render('components/badge');
    })->name('components.badge');
    Route::get('/components/breadcrumb', function () {
        return Inertia::render('components/breadcrumb');
    })->name('components.breadcrumb');
    Route::get('/components/button', function () {
        return Inertia::render('components/button');
    })->name('components.button');
    Route::get('/components/calendar', function () {
        return Inertia::render('components/calendar');
    })->name('components.calendar');
    Route::get('/components/card', function () {
        return Inertia::render('components/card');
    })->name('components.card');
    Route::get('/components/carousel', function () {
        return Inertia::render('components/carousel');
    })->name('components.carousel');
    Route::get('/components/chart', function () {
        return Inertia::render('components/chart');
    })->name('components.chart');

});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
