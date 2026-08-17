---
title: item_durability_multiplier
titleZh: item_durability_multiplier
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# item_durability_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiplies the durability loss of the held item, effectively making it more or less durable.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_durability_multiplier` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The durability multiplier to apply (e.g. 2 means the item lasts twice as long). Supports expressions. Example: `1 + %level% * 0.05` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectItemDurabilityMultiplier.kt`).

- **Source Description**: Multiplies the durability loss of the held item, effectively making it more or less durable.
- **Categories**: `inventory`
- **Requires Trigger Data**: `EVENT`

## Configuration Example

```yaml
- id: item_durability_multiplier
  args:
    multiplier: 1.5 # The multiplier for the durability
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
