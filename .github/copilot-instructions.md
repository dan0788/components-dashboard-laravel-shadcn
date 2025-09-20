# Copilot Instructions for AI Agents

## Project Overview
This is a Laravel 11 + shadcn/ui + InertiaJS starter template for building custom user/admin panels. The stack combines Laravel (backend), InertiaJS (SPA bridge), and shadcn/ui (React UI components) for rapid development.

## Key Architecture
- **Backend:** Laravel (PHP) in `app/`, with controllers, models, and requests organized by domain.
- **Frontend:** React (TypeScript) in `resources/js/`, using shadcn/ui components. Pages are in `resources/js/pages/`, components in `resources/js/components/`.
- **SPA Bridge:** InertiaJS connects Laravel routes to React pages.
- **Database:** Migrations, factories, and seeders in `database/`.

## Developer Workflows
- **Install:**
  - `composer install` (PHP deps)
  - `npm install` (JS deps)
- **Build/Dev:**
  - `npm run dev` (Vite dev server)
  - `npm run build` (production build)
- **Serve:**
  - `php artisan serve` (Laravel dev server)
- **Migrate/Seed:**
  - `php artisan migrate` / `php artisan db:seed`
- **Testing:**
  - `php artisan test` (PHPUnit)

## Project-Specific Patterns
- **React pages** are mapped to Laravel routes via Inertia. Example: `routes/web.php` → `resources/js/pages/`.
- **UI components** are reused via `resources/js/components/`.
- **TypeScript** is used for all frontend code.
- **Tailwind CSS** is configured via `tailwind.config.js` and used throughout UI.
- **Factories/Seeders** for test data are in `database/`.

## Integration Points
- **InertiaJS:** Handles requests/responses between Laravel and React. See `app/Http/Controllers` and `resources/js/pages/` for examples.
- **shadcn/ui:** Used for all major UI elements. See `resources/js/components/`.
- **Vite:** Handles frontend asset bundling (`vite.config.js`).

## Conventions
- **Controllers** in `app/Http/Controllers/` are grouped by resource/domain.
- **Models** in `app/Models/`.
- **React components** are PascalCase, pages are in `pages/`, shared UI in `components/`.
- **Environment variables** in `.env` (copy from `.env.example`).

## Examples
- To add a new page: create a file in `resources/js/pages/`, add a route in `routes/web.php`, and return an Inertia response from a controller.
- To add a new model: create in `app/Models/`, migration in `database/migrations/`, factory in `database/factories/`.

## References
- [Laravel Docs](https://laravel.com/docs/)
- [InertiaJS Docs](https://inertiajs.com/)
- [shadcn/ui Docs](https://ui.shadcn.com/docs)

---
For questions, see `README.md` or contact the maintainer.
