---
title: telekinesis
titleZh: telekinesis
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# telekinesis <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Teleports all drops to the player's inventory

## Overview

| Property | Value |
|----------|-------|
| Type ID | `telekinesis` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `on_tamed_mob_kills` | Boolean | — | `false` | — | If telekinesis will also work for tamed mob kills \| Source: If true, telekinesis also applies when a tamed mob kills an entity. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTelekinesis.kt`).

- **Source Description**: Automatically sends all drops and XP from blocks, entities, and fishing directly to the player's inventory.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: telekinesis
  args:
    on_tamed_mob_kills: false # If telekinesis will also work for tamed mob kills
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
