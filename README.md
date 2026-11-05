# Smart Inventory and Sales Management System

Paperlane is a responsive React/Vite demo frontend for inventory, billing, stock operations, and sales analytics. It uses realistic stationery data and browser `localStorage`, so a backend is not needed for a demonstration.

## Run locally

1. Install Node.js 20.19+ or 22.12+.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL Vite prints.
4. Sign in with any valid email and a password of at least 6 characters, or create a demo account.

Use `npm run build` to create the production bundle and `npm run preview` to serve it locally.

## Pages

Login, registration, password recovery, dashboard, inventory, product details, billing and sales, stock management, low stock alerts, AI demand prediction, analytics and reports, user management, and settings.

## Demo behavior

Products, invoices, movements, users, notices, and session are persisted in localStorage. Billing validates available stock, reduces stock after successful checkout, records the invoice and stock movements, and supports printing. Analytics exports a CSV report. The prediction page labels its sample forecast as illustrative demo data.

## Backend integration

`src/services/api.js` is the shared HTTP client. Configure `VITE_API_URL` in a `.env` file to point to an Express API, then replace the local methods in `inventoryService.js` and `salesService.js` with REST calls. The server should provide authentication, authorization for Admin/Staff roles, product and stock movement endpoints, sales/invoice creation with atomic stock deduction, reporting, and forecast endpoints. The current demo login and password recovery are mock-only.

## Project layout

```text
src/
  App.jsx                 Routes, screens, reusable UI, and demo interactions
  data.js                 Seed products, sales, and users
  style.css               Responsive application styles
  services/
    api.js                Shared REST client
    inventoryService.js   Inventory local/API boundary
    salesService.js       Sales local/API boundary
  main.jsx                React entry point
```

Core sections in the source include comments to make each area easier to follow.
