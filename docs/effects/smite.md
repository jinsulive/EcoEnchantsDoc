---
title: smite
titleZh: smite
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# smite <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Strikes lightning on a victim

## Overview

| Property | Value |
|----------|-------|
| Type ID | `smite` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `damage` | Expression(数学表达式) | ✅ | — | — | The amount of damage the lightning strike deals to the victim. Supports expressions. Example: `%level% * 2` |
| `silent` | Custom | — | — | — | If the lightning should be silent |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSmite.kt`).

- **Source Description**: Strikes the victim with lightning, dealing a configurable amount of damage.
- **Categories**: `combat`, `world`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: smite
  args:
    damage: 5 # The damage to deal
    silent: true # If the lightning should be silent
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
