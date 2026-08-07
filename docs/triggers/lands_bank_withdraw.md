---
title: lands_bank_withdraw
titleZh: lands_bank_withdraw
category: triggers
subcategory: external
tags:
  - libreforge
  - lands
outline: deep
---

# lands_bank_withdraw <Badge type="info" text="libreforge" /> <Badge type="warning" text="Lands" />

> Triggered when withdrawing from the Lands bank

## Overview

| Property | Value |
|----------|-------|
| Type ID | `lands_bank_withdraw` |
| Module | libreforge |
| Category | External Integration |
| Value | The value withdrawn (alt-value: new balance) |
| Requires | Lands |

## Configuration Example

```yaml
triggers:
  - lands_bank_withdraw
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The value withdrawn (alt-value: new balance) |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
