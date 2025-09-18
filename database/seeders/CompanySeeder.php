<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Company::factory()->create([
            'client_id' => 1,
            'company_type_id' => 1,
            'avatar' => 'shadcn.png',
        ]);
        Company::factory()->create([
            'client_id' => 2,
            'company_type_id' => 4,
            'avatar' => 'shadcn.png',
        ]);
        Company::factory()->create([
            'client_id' => 3,
            'company_type_id' => 3,
            'avatar' => 'shadcn.png',
        ]);
        Company::factory()->create([
            'client_id' => 4,
            'company_type_id' => 6,
            'avatar' => 'shadcn.png',
        ]);
    }
}
