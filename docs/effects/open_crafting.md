---
title: open_crafting
titleZh: open_crafting
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# open_crafting <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Opens a crafting table for the player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `open_crafting` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectOpenCrafting.kt`).

- **Source Description**: Opens a virtual crafting table GUI for the player.
- **Categories**: `player`, `inventory`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: open_crafting
...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
