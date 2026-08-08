---
title: lifesteal
titleZh: lifesteal
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# lifesteal <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Heals the player for a portion of the trigger's value (e.g. damage dealt)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `lifesteal` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The fraction of damage dealt that is converted into healing. Supports expressions. Example: `0.1 + %level% * 0.01` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectLifesteal.kt`).

- **Source Description**: Heals the player for a portion of the damage dealt to the victim.
- **Categories**: `combat`, `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: lifesteal
  args:
    multiplier: 0.5 # The fraction of the trigger value to heal
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
