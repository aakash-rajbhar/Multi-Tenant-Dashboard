# Multi-Tenant Sales Dashboard

A concise React + Vite + Tailwind frontend for a multi-tenant sales dashboard with role-based access.

## What’s Inside
- Multi-tenant data isolation (Org A / Org B) with tenant switcher
- RBAC: Admin (can edit lead status) vs Agent (view-only)
- Leads: list, status filter, admin-only status edit modal
- Call Logs: tenant-scoped list with outcome badges
- Lazy-loaded feature pages with Suspense fallbacks
- Modern UI: Montserrat font, gradients, responsive grid

## How to Run
```bash
npm install
npm run dev
# build
npm run build
```

## How to Use
- Switch tenant: header tenant dropdown updates all data
- Switch role: header user menu → Admin/Agent
  - Admin sees “Edit Status” on leads; Agent is view-only
- Edit lead status: Admin clicks ✏️ → pick status → Save

## Data & Auth (Mocked)
- Tenants: orgA, orgB
- Roles: admin, agent
- AuthContext provides `user`, `switchTenant`, `switchRole`, `login`, `logout` (mock only)
- Data lives in `src/data/mockData.js` (leads, calls keyed by `tenantId`)

## Structure
```
src/
  app/App.jsx            Root shell
  auth/AuthContext.jsx   Mock auth + tenant/role state
  data/mockData.js       Tenants, leads, calls
  modules/
    leads/LeadsPage.jsx  Leads list + edit modal (admin-only)
    calls/CallsPage.jsx  Call logs list
  shared/components/     Layout, TenantSwitcher, UserMenu, EditLeadModal, etc.
  index.css              Tailwind + Montserrat setup
```

## Notes
- Frontend-only; no real backend/auth. Role/tenant switches are client-side for demo.
- Uses `useMemo` for filtered views and `React.lazy`/`Suspense` for feature code-splitting.
- To adjust styling, edit `src/index.css` (fonts) or component Tailwind classes.
