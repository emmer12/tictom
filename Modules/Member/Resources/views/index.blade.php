@extends('backend.layouts.member')
@section('content')
    <div id="member-app">
        <member-dashboard></member-dashboard>

    </div>

    
    <script>
        window.permission = {!! json_encode(Auth::user()->permissions()->pluck('name')) !!} 
    </script>
@endsection
