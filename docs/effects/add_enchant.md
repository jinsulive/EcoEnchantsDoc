---
title: add_enchant
titleZh: add_enchant
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# add_enchant <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Adds an enchantment to the triggering item.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_enchant` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `enchant` | Enchantment | ✅ | — | — | The enchantment to add, e.g. sharpness. |
| `level` | Expression | ✅ | — | — | The level of the enchantment to add. Supports expressions. Example: `%level% + 1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddEnchant.kt`).

- **Source Description**: Adds an enchantment to the triggering item.
- **Categories**: `inventory`
- **Requires Trigger Data**: `ITEM`

## Configuration Example

```yaml
- id: add_enchant
  args:
    enchant: razor # The ID of the enchant
    level: 2 # The level of the enchant
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
