<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Products;



class ProductController extends Controller
{
    public function insert(Request $request)
    {
        
        $product=new Products();
        $product->name=$request->input('name');
        $product->price=$request->input('price');
        $product->date=$request->input('date');
        $product->description=$request->input('description');
        $product->type=$request->input('type');
        $product->country=$request->input('country');
        if($request->hasFile('image'))
        {
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('uploads/product/',$filename);
            $product->image='uploads/product/'.$filename;
        }

        $product->save();

        return response()->json([
            'status'=>200,
            'message'=>'the product successfully insert'
        ]);

    }

    public function index()
    {
        $product=Products::all();
        return response()->json([
            'status'=>200,
            'product'=>$product,
        ]);
    }

    public function delete($id)
    {
        $product=Products::find($id);
        $product->delete();
        return response()->json([
            'status'=>200,
            'message'=>'the product successfully deleted',
        ]);
    }

    public function edit($id)
    {
        $product=Products::find($id);
        return response()->json([
            'status'=>200,
            'product'=>$product,
        ]);
    }

    public function update(Request $request,$id)
    {
        
        $product=Products::find($id);
        $product->name=$request->input('name');
        $product->price=$request->input('price');
        $product->date=$request->input('date');
        $product->description=$request->input('description');
        $product->type=$request->input('type');
        $product->country=$request->input('country');
      

        $product->update();

        return response()->json([
            'status'=>200,
            'message'=>'the product successfully update'
        ]);

    }

    public function all()
    {
        $product=Products::all();
        return response()->json([
            'status'=>200,
            'product'=>$product
        ]);
    }

}
