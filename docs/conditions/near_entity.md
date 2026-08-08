---
title: near_entity
titleZh: near_entity
category: conditions
subcategory: position
tags:
  - libreforge
outline: deep
---

# near_entity <Badge type="info" text="libreforge" />

> Requires a player to be within a certain radius of an entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `near_entity` |
| Module | libreforge |
| Category | Position & Movement |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `entities` | Entity List | ✅ | — | — | The list of entity types to look for nearby. |
| `radius` | Expression(数学表达式) | ✅ | — | — | The radius in blocks to search for nearby entities. Example: `5 + %level% * 0.5` |
| `amount` | Integer | — | `1` | — | The minimum number of matching entities required (defaults to 1). |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionNearEntity.kt`).

- **Source Description**: Passes when the specified number of matching entities are within the given radius.
- **Categories**: `entity`

## Configuration Example

```yaml
- id: near_entity
  args:
    entities: # The list of entities
      - zombie
      - ecomobs:illusioner
    radius: 25 # The radius
    amount: 5 # (Optional) The minimum amount of listed entities
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
