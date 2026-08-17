---
title: lands_bank_deposit
titleZh: lands_bank_deposit
category: triggers
subcategory: external
tags:
  - libreforge
  - lands
outline: deep
---

# lands_bank_deposit <Badge type="info" text="libreforge" /> <Badge type="warning" text="Lands" />
> **Requires:** Lands

> Fires when the player deposits money into a Lands bank.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `lands_bank_deposit` |
| Module | libreforge |
| Category | External Integration |
| Value | The value deposited (alt-value: new balance) |
| Requires | Lands |

## Configuration Example

```yaml
triggers:
  - lands_bank_deposit
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The value deposited (alt-value: new balance) |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
