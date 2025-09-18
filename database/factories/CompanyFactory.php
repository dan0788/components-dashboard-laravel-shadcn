<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
            'name_company' => fake()->company(),
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
        ];
    }
}
