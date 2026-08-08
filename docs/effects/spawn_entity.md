---
title: spawn_entity
titleZh: spawn_entity
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# spawn_entity <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Spawns an entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `spawn_entity` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `entity` | Entity | ✅ | — | — | The entity type to spawn at the trigger location. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSpawnEntity.kt`).

- **Source Description**: Spawns an entity at the trigger location.
- **Categories**: `entity`
- **Requires Trigger Data**: `LOCATION`

## Configuration Example

```yaml
- id: spawn_entity
  args:
    entity: cave_spider speed:100 # The mob to spawn, takes a lookup string
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
