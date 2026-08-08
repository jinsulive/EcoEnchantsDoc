---
title: repair_item
titleZh: repair_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# repair_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Repairs the item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `repair_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `damage` | Expression(数学表达式) | ✅ | — | — | The durability to repair \| Source: The amount of durability to restore. Supports expressions. Example: `50 + %level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRepairItem.kt`).

- **Source Description**: Repairs the triggering item by a specified amount of durability.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: repair_item
  args:
    damage: 2 # The durability to repair
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
