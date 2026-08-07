---
title: exit_claim
titleZh: exit_claim
category: triggers
subcategory: external
tags:
  - libreforge
  - husktowns-/-huskclaims-/-lands
outline: deep
---

# exit_claim <Badge type="info" text="libreforge" /> <Badge type="warning" text="HuskTowns / HuskClaims / Lands" />

> Triggered when exiting a claimed area

## Overview

| Property | Value |
|----------|-------|
| Type ID | `exit_claim` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | HuskTowns / HuskClaims / Lands |

## Configuration Example

```yaml
triggers:
  - exit_claim
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
