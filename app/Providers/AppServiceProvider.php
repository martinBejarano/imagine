<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Inertia::share('app_url', config('app.url'));
        Inertia::share([
            'app' => [
                'url' => config('app.url'),
                'public_key' => config('recaptcha.public.key')
            ]
        ]);
    }
}
