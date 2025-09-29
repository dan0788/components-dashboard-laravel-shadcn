<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CompanyType;
use Illuminate\Support\Facades\DB;
use App\Models\Company;

class StatisticsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function typeStatistics()
    {
        $companyTypeNameArray = $this->getListCompanyType();

        foreach ($companyTypeNameArray as $type) {
            $companyType = CompanyType::where('type', $type)->first();
            $desktop = 0;
            if ($companyType) {
                $desktop = Company::where('company_type_id', $companyType->id)->count();
            }
            $linearChartData[] = [
                'type' => $type,
                'desktop' => $desktop
            ];
        }

        $linearChartConfig = [
            'desktop' => [
                'label' => 'Desktop',
                'color' => 'var(--chart-2)',
            ]
        ];

        $accessibilitiesList = $this->getListAccessibilities();

        foreach ($accessibilitiesList as $access) {

            $count = 0;
            $accessArray = ['accessibility' => $access];

            foreach ($companyTypeNameArray as $type) {

                $companyType = CompanyType::where('type', $type)->first();
                $count = Company::where([
                    'company_type_id' => $companyType->id,
                    $access => true,
                ])
                    ->count();
                $normalizedType = str_replace(' ', '_', $type);
                $accessArray[$normalizedType] = $count;
            }
            $interactiveAreaChartData[] = $accessArray;
        }//dd($linearChartData);

        $normalizedType = "";
        $interactiveAreaChartConfig = [];
        $count = 0;

        foreach ($companyTypeNameArray as $type) {
            $normalizedType = str_replace(' ', '_', $type);
            $count++;
            $interactiveAreaChartConfig[$normalizedType] = [
                'label' => $normalizedType,
                'color' => "var(--chart-$count)",
            ];
            if ($count >= 10) {
                $count = 0;
            }
        }

        return inertia('statistics', [
            'linearChartProps' => [
                'data' => $linearChartData,
                'config' => $linearChartConfig
            ],
            'interactiveAreaChartProps' => [
                'data' => $interactiveAreaChartData,
                'config' => $interactiveAreaChartConfig
            ],
        ]);
    }
}
