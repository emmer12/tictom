{{-- @include ('frontend.includes.footer-comment-area') --}}

<footer class="footer section pt-6 pt-md-8 pt-lg-5 mt-lg-5 pb-3  overflow-hidden">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 mb-4 mb-lg-0">
                <a class="footer-brand mr-lg-5 d-flex" href="/">
                    <img src="{{asset('img/logo.png')}}" height="35" class="mr-3" alt="Footer logo">
                </a>
                <p class="my-4">
                    {!! setting('meta_description') !!}
                </p>
            </div>
            <div class="col-6 col-sm-3 col-lg-2 mb-4 mb-lg-0 text-center">
                <h6>
                    Pages
                </h6>
                <ul class="links-vertical">
                    <li><a target="_blank" href="#">Support</a></li>
                    <li><a target="_blank" href="#">Contact Us</a></li>
                </ul>
            </div>
           
            <div class="col-12 col-sm-6 col-lg-4">
                <h6>Subscribe</h6>
                <p class="font-small">The latest Impact news, articles, and resources, sent straight to your inbox every month.</p>
                <form action="#">
                    <div class="form-row">
                        <div class="col-8">
                            <input type="email" class="form-control mb-2" placeholder="Email Address" required>
                        </div>
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary ">Subscribe</button>
                        </div>
                    </div>
                </form>
                <small class="mt-2">We’ll never share your details. See our <a href="{{route('frontend.privacy')}}" class="font-weight-bold text-underline">Privacy Policy</a></small>
            </div>
        </div>

        <hr class="my-4 my-lg-2">

        <div class="row">
            <div class="col pb-4 mb-md-0">
                <div class="d-flex text-center justify-content-center align-items-center">
                    <p class="font-weight-normal mb-0">
                        &copy; {{ app_name() }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
