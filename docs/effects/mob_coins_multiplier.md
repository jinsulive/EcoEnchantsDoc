---
title: mob_coins_multiplier
titleZh: mob_coins_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# mob_coins_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies TMMobCoins earned from mob kills while the holder is active.

> **Requires:** TMMobCoins

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mob_coins_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply. Supports expressions. |

## Configuration Example

```yaml
- id: mob_coins_multiplier
  args:
    multiplier: 1.5 # The multiplier
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
