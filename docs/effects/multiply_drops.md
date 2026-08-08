---
title: multiply_drops
titleZh: multiply_drops
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# multiply_drops <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiplies drops

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_drops` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `on_items` | Item List | — | `[]` | — | A list of items to restrict drop multiplication to. Defaults to all drops. |
| `fortune` | Expression(数学表达式) | ✅ | — | — | Either a flat drop multiplier or a fortune level to simulate (Option 1). Supports expressions. Example: `1 + %level% * 0.1` |
| `multiplier` | Expression(数学表达式) | ✅ | — | — | Either a flat drop multiplier (Option 2) or a fortune level to simulate. Supports expressions. Example: `1 + %level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMultiplyDrops.kt`).

- **Source Description**: Multiplies the item drops from an event, either by a flat multiplier or by simulating a fortune level.
- **Categories**: `inventory`
- **Requires Trigger Data**: `EVENT`

## Configuration Example

```yaml
- id: multiply_drops
  args:
    on_items: # (Optional) The drops to multiply
      - diamond
      - emerald
    fortune: 3 # The level of fortune to mimic (Option 1)
    multiplier: 2 # The drop multiplier (Option 2)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
