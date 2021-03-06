<?php

use Illuminate\Http\Request;
use Api\VetController;

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

Route::group(['middleware' => ['auth'], 'prefix' => 'veter'], function () {
    Route::resource('/',VetController::class)->only(['index','store','update']);
});