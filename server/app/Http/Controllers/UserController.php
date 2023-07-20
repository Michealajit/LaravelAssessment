<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function create(){
        return view('users.register');
    }

public function store(Request $request){
   // dd($request);
    $formField = $request->validate([
        'name' => ['required','min:3'],
        'email' => ['required','email',Rule::unique('users','email')],
        'password' => ['required','min:6']
    ]);
    print_r($formField);
    //hash password
    $formField['password'] = bcrypt($formField['password']);
    

    // create the user in database
    $user = User::create($formField);

    //Login
    auth()->login($user);
    return response()->json($user, 201);
    //return redirect('/')->with('message','User created successfully');
    
}

public function logoutUser(Request $request){
    auth()->logout();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect('/')->with('message','You have successfully logged out!');
}

public function login(){
    return view('users.login');
}

public function authenticate(Request $request){
    
      $formField = $request->validate([
        'email' => ['required','email'],
        'password' => ['required']
      ]);

    //   if(auth()->attempt($formField)){
    //     $request->session()->regenerate();
    //     return redirect('/')->with('message','successfully logged In!');
    //   }
    
    $user = User::where('email', $formField['email'])->first();


      if(auth()->attempt($formField)){
        return response()->json($user, 201);
      }else{

      return response()->json(['message' => 'Invalid Credentials'], 202);}
}

}
