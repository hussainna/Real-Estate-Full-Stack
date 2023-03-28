<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProductController;


Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);
Route::get('all-products',[ProductController::class,'all']);

Route::group(['middleware' => ['auth:sanctum']],function(){
    Route::post('logout',[AuthController::class,'logout']);
});

Route::group(['middleware' => ['auth:sanctum','isAdmin']],function(){
    Route::get('authcheck',function(){
        return response()->json(['message'=>'you are in','status'=>200],200);
    });

    Route::post('insert-product',[ProductController::class,'insert']);
    Route::get('products',[ProductController::class,'index']);
    Route::post('delete-product/{id}',[ProductController::class,'delete']);
    Route::post('update-product/{id}',[ProductController::class,'update']);
    Route::get('edit/{id}',[ProductController::class,'edit']);


});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
