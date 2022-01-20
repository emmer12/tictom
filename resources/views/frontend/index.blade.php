@extends('frontend.layouts.app')

@section('title') {{ app_name() }} @endsection

@section('content')

    @include('frontend.includes.hero')


    <div class="container">
        <section>
            <div class="header">
                <h4>Top Vertor</h4>
            </div>

            <div class="slider">
                @forelse (['1','2', '3','4','5'] as $item)
                    @component('components.vetor-card', ['vetor' => $item])@endcomponent
                @empty
                    Empty
                @endforelse
            </div>
        </section>
    </div>
    <div class="spacer"></div>

    <section class="section-become">
        <div class="container">
            @component('components.become')@endcomponent
        </div>
    </section>


    <div class="spacer"></div>



    <section class="section-vetor">
        <div class="container">
            <div class="header">
                <h4>Top Vertor</h4>
            </div>

            <div class="slider">
                @forelse (['1','2', '3','4','5'] as $item)
                    @component('components.vet-card')@endcomponent
                @empty
                    Empty
                @endforelse
            </div>
        </div>
    </section>




    {{-- <section>

        <div class="container">
            <br>
            <section class="trending">
                @component('components.trending-card', ['type' => 0])@endcomponent
                @component('components.trending-card', ['type' => 1])@endcomponent
                @component('components.trending-card', ['type' => 2])@endcomponent
            </section>

            <br><br>

            <api></api>
            <div>
                <table class="table table-trending table-hover table-responsive-sm table-strip">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Token Name</th>
                            <th>Chain</th>
                            <th>Symbol</th>
                            <th>Starting market Cap</th>
                            <th>Market Cap</th>
                            <th>Price</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($tokens as $index=>$token)
                            <tr>
                                <td>{{ $index + 1 }} </td>
                                <td>{{ $token->token_name }} </td>
                                <td>{{ $token->network }} </td>
                                <td>{{ $token->symbol }} </td>
                                <td>{{ $token->smc }} </td>
                                <td>{{ $token->token_name }} </td>
                                <td valign="top">
                                    <api address={{ $token->address }}></api>
                                </td>


                            </tr>
                        @empty
                            <div>Empty</div>
                        @endforelse
                    </tbody>
                </table>
            </div>


        </div>


    </section> --}}




@endsection

@push('after-styles')
    <style>
        .trending {
            display: flex
        }

        .table-trending tr {
            background: #000012;
            color: rgba(255, 255, 255, 0.7);
        }

        .slider {
            width: 100%;
            text-align: center;
            display: flex
        }

    </style>
@endpush

@push('after-scripts')


    <script>
        // $(".slider").slick({
        //     centerMode: true,
        //     infinite: true,
        //     autoplay: true
        // });

        const createSlick = () => {
            $('.slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                slidesPerRow: 1,
                type: 'inline',
                // asNavFor: '.slider-for',
                // dots: true,
                focusOnSelect: true,
                rows: 1,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            adaptiveHeight: true,
                            rows: 1,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            // adaptiveHeight: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            rows: 1,
                        },
                    },
                ],
            });

        }
        createSlick();

        $(window).on('resize orientationchange', createSlick);
    </script>
@endpush
