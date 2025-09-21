<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\Company;

class Client extends Model
{
    use HasFactory;
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'email_verified_at',
        'password',
        'avatar',
        'notifications',
    ];

    public function company(): HasOne
    {
        return $this->hasOne(Company::class, 'client_id', 'id');
    }
}
