<?php

namespace Modules\Veter\Http\Controllers\Api;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Veter\Entities\Vet;

class VetController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        $lists=auth()->user()->vets;
        return response(['success'=>true,'lists'=>$lists],200);
        
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('token::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {

        $validate=$request->validate([
            'title' => ['required','string'],
            'price' => ['required','numeric'],
            'description' => ['required','string'],
            'offers' => ['required','array'],
            'preview' => ['string'],
       ]);

       $data=$request->all();

       $data['offers']=json_encode($request->offers);

       $data['user_id']=auth()->id();
       Vet::create($data);

      return response(['success'=>"post Created"],200);


    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('token::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('token::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
