<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ListingController extends Controller
{
    public function index(){
      
        return view('listings.index',
        [
         
         'listings'=> Listing::latest()->filter(request(['tag','search']))->paginate(6)
        ]
     );  
    }

    public function apiAll(){
      return Listing::latest()->filter(request(['tag','search']))->paginate(6);
    }


    public function show(Listing $listing){
      //      dd($lists);
        return view('listings.show',
  ['listing' => $listing]); 

    }

    public function create(){
        return view('listings.create');
    }

    public function store(Request $request){
      
      $formField = $request->validate([
                 'title' =>'required',
                 'company' => ['required',Rule::unique('listings','company')],
              //   'location' => 'required',
              //   'website'  => 'required',
              //   'email' => ['required','email'],
              //   'tags' => 'required',
                 'description' => 'required',
                 'user_id' => 'required'
      ]);
//       if($request->hasFile('logo')){
//         $formField['logo'] = $request->file('logo')->store('logos','public');
//       }
// $formField['user_id'] = auth()->id();
      
      Listing::create($formField);
      return response()->json($formField, 201);
    //  return redirect('/')->with('message','Listing created Successfully');
    }
    

    public function edit(Listing $listing){
      return view('listings.edit',
      ['listing'=>$listing]
    );

   
    }
    public function update( Listing $listing,Request $request){
      if($listing->user_id != auth()->id()){
        abort('403','Unauthorized Action');
      }
      $formField = $request->validate([
        'title' =>'required',
        'company' => ['required'],
        'location' => 'required',
        'website'  => 'required',
        'email' => ['required','email'],
        'tags' => 'required',
        'description' => 'required'
]);
if($request->hasFile('logo')){
$formField['logo'] = $request->file('logo')->store('logos','public');
}
     $listing->update($formField);
return back()->with('message','Listing updated Successfully');

    }

public function destroy(Listing $listing){
  if($listing->user_id != auth()->id()){
    abort('403','Unauthorized Action');
  }
  $listing->delete();
  return redirect('/')->with('message','Listing deleted successfully');
}


    public function manage(){
      return view('listings.manage',[
        'listings' => auth()->user()->listing()->get()
      ]);
    }
}
