<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'uid',
        'client_id',
        'company_type_id',
        'avatar',
        'company_name',
        'direction',
        'country',
        'province',
        'city',
        'ramp',
        'braille_language',
        'elevator',
        'first_aid_kit',
        'sign_language',
        'private_transportation',
        'information_places',
    ];

    protected $hidden = [];

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    public function company_type(): BelongsTo
    {
        return $this->belongsTo(CompanyType::class);
    }
}
