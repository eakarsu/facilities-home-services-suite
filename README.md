# Facilities Home Services Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AICommercialCleaningOperations`
- `AIHomeRenovationProjectManager`
- `pestControl`
- `repairShop`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/facilities-home-services-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:3820`

Seeded users:
- `admin@facilities-home.local / admin123`
- `manager@facilities-home.local / manager123`
- `analyst@facilities-home.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/facilities-home-services-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:3820 npm run smoke
```
