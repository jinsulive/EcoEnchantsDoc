---
title: set_unbreakable
titleZh: set_unbreakable
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# set_unbreakable <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Makes an item in a specific slot unbreakable while the effect is active.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_unbreakable` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `value` | Boolean | — | `true` | — | Whether to make the item unbreakable (true) or breakable (false). |
| `slot` | String | — | `holder` | — | The equipment slot to target: holder, mainhand, offhand, helmet, chestplate, leggings, or boots. Example: `mainhand` |
| `persist_on_disable` | Boolean | — | `true` | — | Whether the unbreakable state should remain when the effect is removed. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetUnbreakable.kt`).

- **Source Description**: Makes an item in a specific slot unbreakable while the effect is active.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: set_unbreakable
  args:
    value: true # True = apply unbreakable, False = remove unbreakable
    slot: holder # The slot to apply unbreakable (defaults to "holder")
    persist_on_disable: true # If the unbreakable tag should persist when unequipped or effect deactivated
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
