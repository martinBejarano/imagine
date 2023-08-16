<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class InertiaRouteServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */

    private $routes = [
        ['name' => 'home', 'uri' => 'home'],
        ['name' => 'features', 'uri' => 'features'],
        ['name' => 'about us', 'uri' => 'aboutus'],
        ['name' => 'testimonials', 'uri' => 'testimonials'],
        ['name' => 'contact', 'uri' => 'contact'],
    ];
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Inertia::share('routes', function () {
            // // Get the list of available routes
            // $routes = $this->routes->map(function ($route) {
            //     return [
            //         'name' => $route->getName(),
            //         'uri' => $route->uri(),
            //         // Add more properties if needed
            //     ];
            // });

            return $this->routes;
        });
    }
}