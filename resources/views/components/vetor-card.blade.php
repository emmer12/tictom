<div class="vt-card">
        <div class="user">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
                alt="" />
            <div class="user-info">
                <h5>Jerome Walton {{$vetor}}</h5>
                <p>{{ \Illuminate\Support\Str::limit('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis beatae voluptatem reprehenderit ipsa ad, aut natus excepturi aliquid sed nesciunt', 60, $end='...') }}</p>
               <div class="action">
                   <div><i class="fa fa-star"></i> <span>5.0 </span>(20)</div>
                   <div>
                       <button class="btn btn-primary btn-sm">Follow</button>
                   </div>
               </div>
            </div>
        </div>
    </div>


@push('after-styles')
    <style>
        .vt-card {
            background-color: rgb(255, 255, 255,12%);
            border-radius: 10px;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            width: 340px !important;
            margin:0px 10px;
            cursor: pointer;
        }

        .v-card-header img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .v-card-body {
            display: flex;
            flex-direction: column;
            align-items: start;
            padding: 20px;
            min-height: 250px;
        }

        .tag {
            background-color: #ccc;
            color: #fff;
            border-radius: 50px;
            font-size: 12px;
            margin: 0;
            padding: 2px 10px;
            text-transform: uppercase;
        }

        .tag-teal {
            background-color: #92d4e4;
        }

        .tag-purple {
            background-color: #3d1d94;
        }

        .tag-pink {
            background-color: #c62bcd;
        }

        .v-card-body h4 {
            margin: 10px 0;
        }

        .v-card-body p {
            font-size: 14px;
            margin: 0 0 40px 0;
            font-weight: 500;
            color: rgb(255,255,255,60%);
        }

        .vt-card .user {
            display: flex;
            margin-top: auto;
            padding: 10px;
        }

        .vt-card .user img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
            object-fit: cover;
            flex-shrink: 0;
        }

        .user-info p{
            text-overflow: ellipsis;
        }

        .user-info h5 {
            margin: 0;
        }

        .user-info small {
            color: #888785;
        }

        .user-info .action{
            display: flex;
            justify-content: space-between
        }

        .user-info i,.user-info span{
            color: #ecda08eb;
        }

        @media (max-width: 940px) {
            .container {
                grid-template-columns: 1fr;
                justify-items: center;
            }
        }

    </style>
@endpush
