---
title: in_block
titleZh: in_block
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# in_block <Badge type="info" text="libreforge" />

> Passes when the entity's head or feet are inside the specified block type.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_block` |
| Module | libreforge |
| Category | World & Environment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `block` | Block | ✅ | — | — | The block material name to check (e.g. WATER). |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionInBlock.kt`).

- **Source Description**: Passes when the entity's head or feet are inside the specified block type.
- **Categories**: `world`

## Configuration Example

```yaml
- id: in_block
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
