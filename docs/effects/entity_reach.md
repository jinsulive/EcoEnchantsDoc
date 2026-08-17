---
title: entity_reach
titleZh: entity_reach
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# entity_reach <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Increases the player's entity interaction range while the holder is active.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_reach` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `reach` | Expression | ✅ | — | — | The number of blocks to add to the entity interaction range. Supports expressions. Example: `%level% * 0.5` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectEntityReach.kt`).

- **Source Description**: Increases the player's entity interaction range while the holder is active.
- **Categories**: `player`, `attribute`

## Configuration Example

```yaml
- id: entity_reach
  args:
    reach: 1 # The extra entity reach
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
