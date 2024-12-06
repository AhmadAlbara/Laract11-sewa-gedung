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
        Schema::create('orders', function (Blueprint $table) {
            $table->uuid("id");
            $table->string('nama_pemesan');
            $table->string('no_telp_pemesan');
            $table->string('email');
            $table->date('tanggal_pemakaian');
            $table->foreignUuid('gedungs_id')->constrained()->onDelete('cascade'); 
            $table->text('keperluan');
            $table->boolean("is_active")->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
