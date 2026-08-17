---
title: give_lands_balance
titleZh: give_lands_balance
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_lands_balance <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Adds money to the Lands balance of the land at the trigger location.

> **Requires:** Lands

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_lands_balance` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The amount to add to the land's balance. Supports expressions. |
| `only_trusted` | Boolean | — | `true` | — | Whether to restrict the effect to trusted land members. Defaults to true. |

## Configuration Example

```yaml
- id: give_lands_balance
  args:
      amount: 1000 # The amount to give, use negative values to take
      only_trusted: true # (Optional) If only trusted players can use this effect. Defaults to true.
    ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
