<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Http;

class Recaptcha implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        //
        // if (strtoupper($value) !== $value) {
        //     $fail('The :attribute must be uppercase.');
        // }

        $endpoint = config('recaptcha.endpoint');
        $secret = config('recaptcha.secret.key');

        $response = Http::asForm()->post($endpoint, [
            'secret' => $secret,
            'response' => $value,
            'ip' => request()->ip()
        ])->json();

        // $fail($secret . ' XXX ' . $value . ' XXX ' . $endpoint . ' XXX ' . request()->ip());

        // $response = Http::asForm($endpoint, [
        //     'secret' => $secret,
        //     'response' => $value,
        //     'ip' => request()->ip()
        // ])->json();

        // $fail(json_encode($response));

        if (!$response['success']) {
            $fail('The recaptcha is invalid')->translate();
        }
    }
}
