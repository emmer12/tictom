<?php

namespace Modules\Token\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\User;

class Token extends Model
{
    use HasFactory;

    protected $guarded;
    protected $fillable = [];
    
    protected static function newFactory()
    {
        return \Modules\Token\Database\factories\TokenFactory::new();
    }


    /**
     * Get the user that owns the Token
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
