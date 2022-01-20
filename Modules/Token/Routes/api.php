<?php


use Illuminate\Http\Request;
use Api\TokenController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth')->get('/token', function (Request $request) {
    return $request->user();
});

Route::prefix('token')->group(function () {
    
});

Route::group(['prefix' => 'token'],function () {
    Route::middleware(['auth'])->group(function () {
        Route::post('upload',[TokenController::class,'upload']);
        Route::resource('/',TokenController::class)->only(['index','store','update']);
    });
});
