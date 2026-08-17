---
title: set_lands_balance
titleZh: set_lands_balance
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_lands_balance <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets the Lands balance of the land at the trigger location to a specific value.

> **Requires:** Lands

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_lands_balance` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The value to set the land's balance to. Supports expressions. |
| `only_trusted` | Boolean | — | `true` | — | Whether to restrict the effect to trusted land members. Defaults to true. |

## Configuration Example

```yaml
- id: set_lands_balance
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
