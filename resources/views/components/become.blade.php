<div class="become flex sm:flex-row flex-col ">
    <div>
        <h1>Become a Vetor</h1>
        <p>This is the shot disicripiton of what we are becoming</p>
    </div>
    <div>
        <button  class="btn btn-secondary ">Sign Up</button>
    </div>

</div>


@push('after-styles')
    <style>
        .become {
            background: rgba(255, 255, 255, 1);
            background-image:linear-gradient(rgb(255 255 255 / 0%) ,rgb(175 175 175)), url(/img/become.png);
            padding: 20px;
            color: rgba(0, 0, 0,0.7);
            border-radius: 10px;
            justify-content: space-between;
            align-items: center;
            /* linear-gradient(rgb(255 255 255 / 0%) ,rgb(175 175 175)), url(/img/become.png) */
            /* linear-gradient(rgb(255 255 255 / 0%) ,rgb(210 210 210)), url(/img/become.png); */
            
        }

        .become h1 {
            font-size: 24px;
            color: #28326d;
            font-weight: 800;
        }


    </style>
@endpush
