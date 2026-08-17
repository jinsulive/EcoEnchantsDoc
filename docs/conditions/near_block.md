---
title: near_block
titleZh: near_block
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# near_block <Badge type="info" text="libreforge" /> <Badge type="info" text="Condition" />

> Passes when a block of the specified type is found within a cubic radius of the entity.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `near_block` |
| Module | libreforge |
| Category | World |
| Effect Type | Condition |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `block` | Block | ✅ | — | — | The block type to search for. |
| `radius` | Integer | ✅ | — | — | The radius of the cube around the entity to search within. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionNearBlock.kt`).

- **Source Description**: Passes when a block of the specified type is found within a cubic radius of the entity.

- **Categories**: `world`

## Configuration Example

```yaml
- id: near_block
  args:
    block: <value>
    radius: <value>
```

## Related Pages

- [All Conditions](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
