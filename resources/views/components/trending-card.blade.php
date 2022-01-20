    <div class="markets-exhibition__card">
        <div class="markets-exhibition__card__title"><span class="markets-exhibition__card__title-txt">Highest 24H
                Turnover</span></div>
        <div class="markets-exhibition__symbol__info">
            <div class="markets-exhibition__symbol__chart">

                @if ($type == 0)
                <svg width="290" height="78" viewBox="0 0 289 77" version="1.1" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <defs>
                    <linearGradient id="k3ytduoppw" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgba(237, 237, 237,0.3); stop-opacity: 1;"></stop>
                        <stop offset="71.02%" style="stop-color: rgba(249, 249, 249,0.4); stop-opacity: 0;"></stop>
                    </linearGradient>
                </defs>
                <path
                    d="M-1 78L-1 10.48L0 10.48L12.61 13.19L25.22 52.94L37.83 58L50.44 50.04L63.05 44.94L75.66 55.18L88.27 38.05L100.88 44.48L113.49 36.56L126.1 41.93L138.71 39.51L151.32 54.17L163.93 55.26L176.54 38.15L189.15 13.46L201.76 47.12L214.37 18.92L226.98 5L239.59 10.08L252.2 27.91L264.81 22.35L277.42 46L290.03 36.5L291 79 Z"
                    fill="url(#k3ytduoppw)" stroke="rgba(24, 22, 55, .11)" stroke-width="1"></path>
            </svg>
                @endif

                @if ($type == 1)
                    <svg width="290" height="78" viewBox="0 0 289 77" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="hc9nbea8a5k" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color: rgba(237, 237, 237,0.3); stop-opacity: 1;"></stop>
                                <stop offset="71.02%" style="stop-color: rgba(249, 249, 249,0.4); stop-opacity: 0;"></stop>
                            </linearGradient>
                        </defs>
                        <path
                            d="M-1 78L-1 53.46L0 53.46L12.61 54.59L25.22 58L37.83 57.34L50.44 56.01L63.05 54.21L75.66 55.54L88.27 55.26L100.88 55.54L113.49 55.35L126.1 55.44L138.71 55.26L151.32 56.11L163.93 55.73L176.54 53.08L189.15 52.13L201.76 54.4L214.37 27.05L226.98 5L239.59 12.95L252.2 16.45L264.81 22.79L277.42 25.92L290.03 24.5L291 79 Z"
                            fill="url(#hc9nbea8a5k)" stroke="rgba(24, 22, 55, .11)" stroke-width="1"></path>
                    </svg>
                @endif

                {{-- @if ($type == 2)

                @endif --}}

                



            </div>
            <div class="markets-exhibition__card__line">
                <div class="markets-exhibition__symbol__main" style="display: flex;align-items:center">
                    <div class="markets-exhibition__symbol-logo" style="
                        width: 30px;">
                        <img src="https://www.freelogovectors.net/wp-content/uploads/2021/10/binance-coin-bnb-logo-freelogovectors.net_.png"
                            alt="btc">
                    </div>
                    <div class="markets-exhibition__card__symbol-name" style="margin-left:5px">BTCUSDT</div>
                </div>
                <div class="markets-exhibition__symbol-markets--up btn btn-sm btn-default">+0.24%</div>
            </div>

            <div class="markets-exhibition__symbol__val" style="font-weight: bold">46,999.50</div>
            <div class="markets-exhibition__symbol__count">24H Turnover 2.53B(USD)</div>
        </div>
    </div>


    @push('after-styles')
        <style>
            .markets-exhibition__card {
                width: 290px;
                background: #ffffff1f;
                padding: 10px;
                position: relative;
                overflow: hidden;
                border-radius: 10px;
                margin: 10px
            }

            .markets-exhibition__card svg {
                position: absolute;
                bottom: 0px;
                left: 0px;
                z-index: -1;
            }

            .markets-exhibition__card__title {
                min-height: 64px;
                padding: 0px;
                font-weight: 500;
                font-size: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .markets-exhibition__card__line {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
            }

            .become h1 {
                font-size: 32px
            }

        </style>
    @endpush
