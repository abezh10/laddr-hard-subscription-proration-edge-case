# Subscription Proration Edge Case

- Category: Debug
- Topic: Logic Bugs
- Difficulty: Hard

## Overview
This sample repository is set up for a hard debug exercise in the logic bugs track. The starter code is intentionally lightweight: it gives Sandpack something meaningful to render or inspect, but it still leaves the real evaluation work in place so a candidate has to trace the current behavior and fix the underlying defect.

## Exercise Summary
Proration is wrong for some mid-cycle plan and seat-count changes. Identify the edge-case bug without regressing simpler upgrade and downgrade paths.

## Starter State
The current scaffold keeps the requested folder layout intact and includes small task-adjacent starter implementations. Frontend files render simple placeholder UI, while routes, services, hooks, utilities, and data files expose minimal sample data or placeholder behavior without solving the exercise for the learner.

## Repo Files
- `package.json`
- `server/services/billing/invoiceService.ts`
- `server/services/billing/prorationService.ts`
- `server/utils/dates.ts`
- `tests/billing/proration.test.ts`

## Likely Change Areas
- `server/services/billing`
- `server/utils`
- `tests/billing`

## Sandbox Notes
These files are intentionally small and preview-friendly. They should render a lightweight surface where that makes sense, while still leaving the real build, debug, refactor, security, or migration work undone.
