---
title: strike_lightning
titleZh: strike_lightning
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# strike_lightning <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Strikes lightning at a point

## Overview

| Property | Value |
|----------|-------|
| Type ID | `strike_lightning` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression(数学表达式) | — | `1` | — | The amount of lightning strikes \| Source: The number of lightning strikes. Supports expressions. Example: `1 + %level% / 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectStrikeLightning.kt`).

- **Source Description**: Strikes lightning at the trigger location.
- **Categories**: `combat`, `world`
- **Requires Trigger Data**: `LOCATION`

## Configuration Example

```yaml
- id: strike_lightning
  args:
    amount: 5 # The amount of lightning strikes
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
