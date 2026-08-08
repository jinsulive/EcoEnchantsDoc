---
title: has_enchant
titleZh: has_enchant
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# has_enchant <Badge type="info" text="libreforge" />

> Multiple enchants and/or slots are supported:

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_enchant` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `enchant` | Enchantment List | ✅ | — | — | The enchant ID \| Source: The enchantment(s) to require, optionally with a level or range (e.g. sharpness:3-5). Example: `sharpness:3-5, unbreaking:2` |
| `slot` | String List | ✅ | — | — | The slot \| Source: The equipment slot(s) to check for the enchantment. Example: `mainhand, 9` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionHasEnchant.kt`).

- **Source Description**: Passes when the entity has an item with the specified enchantment in the specified slot.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: has_enchant
  args:
    enchant: sharpness # The enchant ID 
    slot: mainhand # The slot
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
