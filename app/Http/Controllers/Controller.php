<?php

namespace App\Http\Controllers;

use App\Models\CompanyType;
use Illuminate\Support\Facades\Schema;

abstract class Controller
{
    private const CODE_CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\-_!@#$%^&*()';
    private const CODE_LENGTH = 10;
    protected function getListCompanyType()
    {
        $companyTypeNameArray = CompanyType::pluck('type')->toArray();
        return $companyTypeNameArray;
    }

    protected function getListAccessibilities()
    {
        $startColumn = 'ramp';
        $endColumn = 'information_places';

        $allColumns = Schema::getColumnListing('companies');
        $startIndex = array_search($startColumn, $allColumns);
        $endIndex = array_search($endColumn, $allColumns);
        $count = $endIndex - $startIndex + 1;
        $subsetColumns = array_slice($allColumns, $startIndex, $count);
        return $subsetColumns;
    }

    protected function generateRandomCode(): string
    {
        $chars = self::CODE_CHARS;
        $charLength = strlen($chars);
        $code = '';

        for ($i = 0; $i < self::CODE_LENGTH; $i++) {
            // Selecciona un carácter aleatorio del conjunto
            $code .= $chars[rand(0, $charLength - 1)]; 
        }

        return $code;
    }
}
