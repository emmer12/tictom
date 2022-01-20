<?php

namespace App\View\Components;

use Illuminate\View\Component;

class VetorCard extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */

   public $vetor;

    public function __construct($vetor)
    {
       $this->vetor= $vetor;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.vetor-card');
    }
}
