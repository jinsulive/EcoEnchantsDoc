---
title: mob_coins_drop_multiplier
titleZh: mob_coins_drop_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# mob_coins_drop_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the amount of UltimateMobCoins received from mob kills while the holder is active.

> **Requires:** UltimateMobCoins

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mob_coins_drop_multiplier` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply. Supports expressions. |

## Configuration Example

```yaml
- id: mob_coins_drop_multiplier
  args:
    multiplier: 1.5 # The drop multiplier
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
