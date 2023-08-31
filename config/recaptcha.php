<?php

return [
    'endpoint' => 'https://www.google.com/recaptcha/api/siteverify',

    'public' => [
        'key' => env('MIX_RECAPTCHA_PUBLIC_KEY')
    ],

    'secret' => [
        'key' => env('MIX_RECAPTCHA_SECRET_KEY')
    ]
];
