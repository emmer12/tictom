@extends('frontend.layouts.app')

@section('title') {{app_name()}} @endsection

@section('content')

<section class="section-header pb-6 pb-lg-10 bg-primary text-white">
    <div class="container">
        <div class="row ">
            <div class="col-12 col-md-6">
                <h1 class="display-3 mb-4">We give you latest and genue coin out there</h1>
                <p class="lead text-muted">
                    {!! setting('meta_description') !!}
                </p>

                <a href="#" class="btn btn-outline-white animate-up-2 mr-3"><i class="fas fa-th-large mr-2"></i>Get Started</a>
                <a href="#" class="btn btn-outline-white animate-up-2 mr-3">Go</a>
                @include('frontend.includes.messages')
            </div>

            <div class="col-12 col-md-6">
                Hello
            </div>
        </div>
    </div>
    <div class="pattern bottom"></div>
</section>


<section>
    <div class="container">
    <h2 class="mb-4 mb-lg-5 ">Trending Token</h2>


    </div>


</section>



<section class="section section-ld">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="mb-4 mb-lg-5 ">Backend pages Edited</h2>
            </div>
            <div class="col-6 col-sm-4 mb-5">
                <a href="#" class="page-preview scale-up-hover-2">
                    <img class="shadow-lg rounded scale" src="https://user-images.githubusercontent.com/396987/88489727-f3889200-cfb7-11ea-819f-dc9a52bc8d82.jpg"
                        alt="Landing page preview">
                    <div class="text-center show-on-hover">
                        <h6 class="m-0 text-center text-white">Dashboard<i
                                class="fas fa-external-link-alt ml-2"></i></h6>
                    </div>
                </a>
            </div>
            <div class="col-6 col-sm-4 mb-5">
                <a href="#" class="page-preview scale-up-hover-2">
                    <img class="shadow-lg rounded scale" src="https://user-images.githubusercontent.com/396987/88519250-a0dcc380-d013-11ea-9dc5-9d731af611f1.jpg"
                        alt="About page preview">
                    <div class="text-center show-on-hover">
                        <h6 class="m-0 text-center text-white">Posts List <i
                                class="fas fa-external-link-alt ml-2"></i></h6>
                    </div>
                </a>
            </div>
            <div class="col-6 col-sm-4 mb-5">
                <a href="#" class="page-preview scale-up-hover-2">
                    <img class="shadow-lg rounded scale" src="https://user-images.githubusercontent.com/396987/88519360-d1bcf880-d013-11ea-9f6c-b5d33912057f.jpg"
                        alt="Pricing page preview">
                    <div class="text-center show-on-hover">
                        <h6 class="m-0 text-center text-white">Posts Edit <i
                                class="fas fa-external-link-alt ml-2"></i></h6>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>

@endsection
