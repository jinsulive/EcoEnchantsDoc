---
title: remove_random_enchant
titleZh: remove_random_enchant
category: effects
subcategory: inventory
tags:
  - libreforge
outline: deep
---

# remove_random_enchant <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Removes a randomly chosen enchantment from the triggering item.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `remove_random_enchant` |
| Module | libreforge |
| Category | Inventory |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `mode` | String | — | `full` | `full`, `level` | Set to 'level' to reduce the enchantment level by 1 instead of removing it entirely. Defaults to removing the enchantment. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveRandomEnchant.kt`).

- **Source Description**: Removes a randomly chosen enchantment from the triggering item.

- **Categories**: `inventory`

## Configuration Example

```yaml
- id: remove_random_enchant
  args:
    mode: <value>
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
