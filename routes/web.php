<?php

use App\Http\Controllers\ContactoController;
use App\Http\Controllers\ProfileController;
use App\Mail\ContactoMailable;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/servicios', function () {
    return Inertia::render('Services');
})->name('Services');

// Route::get('/contacto', function () {
//     Mail::to('carlos@veterinario.com')->send(new ContactoMailable());
//     return 'Mensaje enviado';
// })->name('Contacto');

Route::get('/contacto', [ContactoController::class, 'index'])->name('Contacto');
Route::post('/contacto/store', [ContactoController::class, 'store'])->name('Contacto.store');
Route::get('/contactanos', function () {
    return view('contacto.index');
})->name('Contactanos');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
