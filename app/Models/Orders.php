<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory ,HasUuids;
    protected $fillable = [
        'nama_pemesan',
        'no_telp_pemesan',
        'email',
        'tanggal_pemakaian',
        'gedungs_id',
        'keperluan',
    ];

    public function gedung()
    {
        return $this->belongsTo(Gedungs::class, 'gedungs_id');
    }
}
