<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;

class CompanyType extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
    ];

    public function company(): HasOne
    {
        return $this->hasOne(Company::class, 'company_type_id', 'id');
    }
}
