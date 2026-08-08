---
title: knockback_multiplier
titleZh: knockback_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# knockback_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies attack knockback

## Overview

| Property | Value |
|----------|-------|
| Type ID | `knockback_multiplier` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for attack knockback \| Source: The knockback multiplier to apply. Supports expressions. Example: `1 + %level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKnockbackMultiplier.kt`).

- **Source Description**: Multiplies the knockback dealt by the player when attacking.
- **Categories**: `combat`, `player`, `attribute`

## Configuration Example

```yaml
- id: knockback_multiplier
  args:
    multiplier: 2 # The multiplier for attack knockback
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
