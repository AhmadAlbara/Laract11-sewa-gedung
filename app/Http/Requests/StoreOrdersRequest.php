<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrdersRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama_pemesan' => 'required|string|max:255',
            'no_telp_pemesan' => 'required|string|max:15',
            'email' => 'required|email',
            'tanggal_pemakaian' => 'required|date|after_or_equal:today',
            'gedungs_id' => 'required|exists:gedungs,id',
            'keperluan' => 'required|string',
        ];
    }
}
