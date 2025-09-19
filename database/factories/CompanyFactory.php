<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Client;
use App\Models\CompanyType;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'uid' => fake()->regexify('[A-Za-z0-9\-_!@#$%^&*()]{10}'),
            'client_id' => Client::all()->random()->id,
            'company_type_id' => CompanyType::all()->random()->id,
            'company_name' => fake()->company(),
            'direction' => fake()->streetAddress(),
            'country' => fake()->country(),
            'province' => fake()->randomElement(['Pichincha', 'Guayas']),
            'city' => fake()->randomElement(['Quito', 'Guayaquil']),
            'ramp' => fake()->boolean(),
            'braille_language' => fake()->boolean(),
            'elevator' => fake()->boolean(),
            'first_aid_kit' => fake()->boolean(),
            'sign_language' => fake()->boolean(),
            'private_transportation' => fake()->boolean(),
            'information_places' => fake()->boolean(),
        ];
    }
}
