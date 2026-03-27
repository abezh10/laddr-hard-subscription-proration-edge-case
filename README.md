# Subscription Proration Edge Case

- Category: Debug / Logic Bugs
- Difficulty: Hard

## Contains
- `server/services/billing/prorationService.ts`
- `server/services/billing/invoiceService.ts`
- `server/utils/dates.ts`
- `tests/billing/proration.test.ts`
- `package.json`

## Prompt
Proration is wrong for some mid-cycle plan and seat-count changes. Identify the edge-case bug without regressing simpler upgrade and downgrade paths.

## Likely Change Dirs
- `server/services/billing`
- `server/utils`
- `server/tests/billing`
