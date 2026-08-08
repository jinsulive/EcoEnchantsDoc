---
title: piercing
titleZh: piercing
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# piercing <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Makes projectiles pass through other entities (collaterals), like the Piercing enchantment.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `piercing` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `level` | Expression(数学表达式) | ✅ | — | — | The number of extra piercing levels to add to the arrow. Supports expressions. Example: `1 + %level% / 20` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPiercing.kt`).

- **Source Description**: Adds extra piercing levels to an arrow projectile, allowing it to pass through additional entities.
- **Categories**: `combat`
- **Requires Trigger Data**: `PROJECTILE`

## Configuration Example

```yaml
- id: piercing
  args:
      level: 3 # The piercing level, i.e. the amount of entities that the projectile should go through
    ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
