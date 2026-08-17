---
title: enter_claim
titleZh: enter_claim
category: triggers
subcategory: external
tags:
  - libreforge
  - husktowns-/-huskclaims
outline: deep
---

# enter_claim <Badge type="info" text="libreforge" /> <Badge type="warning" text="HuskTowns / HuskClaims" />
> **Requires:** HuskClaims

> Fires when the player enters a HuskClaims claim.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `enter_claim` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | HuskTowns / HuskClaims |

## Configuration Example

```yaml
triggers:
  - enter_claim
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
