<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::group(['as' => 'member.', 'middleware' => 'web', 'prefix' => 'member'], function () {
    /*
     *
     *  Member Routes
     *
     * ---------------------------------------------------------------------
     */


    $controller_name = 'MemberController';
    $module_name = 'member';
    Route::get('/', ['as' => "index", 'uses' => "$controller_name@index",'middleware' => ['auth','verified']]);
});
