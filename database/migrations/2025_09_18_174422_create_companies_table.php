<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->foreignId('client_id')->constrained()->onDelete('cascade');
            $table->foreignId('company_type_id')->constrained()->onDelete('cascade');
            $table->string('avatar')->nullable();
            $table->string('company_name');
            $table->string('direction');
            $table->string('country');
            $table->string('province');
            $table->string('city');
            $table->boolean('ramp');
            $table->boolean('braille_language');
            $table->boolean('elevator');
            $table->boolean('first_aid_kit');
            $table->boolean('sign_language');
            $table->boolean('private_transportation');
            $table->boolean('information_places');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
