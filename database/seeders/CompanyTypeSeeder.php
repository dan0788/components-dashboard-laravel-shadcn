<?php

namespace Database\Seeders;

use App\Models\CompanyType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanyTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CompanyType::factory()->create([
            'type' => 'Entertainment'
        ]);
        CompanyType::factory()->create([
            'type' => 'Food'
        ]);
        CompanyType::factory()->create([
            'type' => 'Transportation'
        ]);
        CompanyType::factory()->create([
            'type' => 'Beverage'
        ]);
        CompanyType::factory()->create([
            'type' => 'General trade'
        ]);
        CompanyType::factory()->create([
            'type' => 'Services'
        ]);
    }
}
