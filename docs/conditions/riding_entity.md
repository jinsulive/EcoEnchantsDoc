---
title: riding_entity
titleZh: riding_entity
category: conditions
subcategory: position
tags:
  - libreforge
outline: deep
---

# riding_entity <Badge type="info" text="libreforge" />

> Requires a player to be riding a certain entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `riding_entity` |
| Module | libreforge |
| Category | Position & Movement |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `entities` | Entity List | ✅ | — | — | The list of entity types the player must be riding. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionRidingEntity.kt`).

- **Source Description**: Passes when the entity is riding one of the specified entity types.
- **Categories**: `entity`

## Configuration Example

```yaml
- id: riding_entity
  args:
    entities: # A list of entities
      - pig
      - zombie
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
