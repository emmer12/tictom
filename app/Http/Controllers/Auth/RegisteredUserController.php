<?php

namespace App\Http\Controllers\Auth;

use App\Events\Frontend\UserProfileUpdated;
use App\Events\Frontend\UserRegistered;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Veter;
use App\Models\Permission;



class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('auth.register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param \App\Http\Requests\LoginRequest $request
     *
     * @throws \Illuminate\Validation\ValidationException
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:191',
            'last_name'  => 'required|string|max:191',
            'username'  => 'required|string|max:191',
            'email'      => 'required|string|email|max:191|unique:users',
            'password'   => 'required|string|confirmed|min:8',
        ]);

        if ($request->vendor) {
            $request->validate([
                'trading_experience' => 'required|string|max:191',
            ]);
        }

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name'  => $request->last_name,
            'username'  => $request->username,
            'name'       => $request->first_name.' '.$request->last_name,
            'email'      => $request->email,
            'password'   => Hash::make($request->password),
        ]);


        if ($request->venter) {
            
            $venter = Veter::create([
                'trading_experience' => $request->trading_experience,
                'user_id' => $user->id,
                'created_at' => date('Y-m-d H:i'),
                'updated_at' => date('Y-m-d H:i'),
            ]);

            

            $venter->save();

           $this->createVentorPermission();
            
            $user->givePermissionTo(['create_signal','edit_signal', 'delete_signal','create_vet','edit_vet','delete_vet']);
        }

        $user->save();

        event(new UserRegistered($user));
        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::MEMBER);
    }

    private function createVentorPermission()
    {
        Permission::firstOrCreate(['name' => 'create_signal']);
        Permission::firstOrCreate(['name' => 'edit_signal']);
        Permission::firstOrCreate(['name' => 'delete_signal']);
        Permission::firstOrCreate(['name' => 'create_vet']);
        Permission::firstOrCreate(['name' => 'edit_vet']);
        Permission::firstOrCreate(['name' => 'delete_signal']);
    }
}
