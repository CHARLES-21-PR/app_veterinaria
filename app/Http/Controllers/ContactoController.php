<?php

namespace App\Http\Controllers;

use App\Mail\ContactoMailable;
use Illuminate\Contracts\Mail\Mailable;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Mail;

class ContactoController extends Controller
{
    public function index()
    {
        return inertia('Contacto');
    }

    public function store(Request $request)
    {
        Mail::to('carlos@veterinario.com')->send(new ContactoMailable($request->all()));
        return redirect()->back()->with('success', 'Mensaje enviado correctamente');
    }
}
