---
title: open_ender_chest
titleZh: open_ender_chest
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# open_ender_chest <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Opens the player's ender chest

## Overview

| Property | Value |
|----------|-------|
| Type ID | `open_ender_chest` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectOpenEnderChest.kt`).

- **Source Description**: Opens the player's ender chest inventory.
- **Categories**: `player`, `inventory`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: open_ender_chest
...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
