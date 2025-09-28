<?php

namespace App\Http\Controllers;

use App\Models\CompanyType;
use Illuminate\Support\Facades\Schema;

abstract class Controller
{
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
}
