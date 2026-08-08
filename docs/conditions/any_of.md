---
title: any_of
titleZh: any_of
category: conditions
subcategory: logic
tags:
  - libreforge
outline: deep
---

# any_of <Badge type="info" text="libreforge" />

> Requires any of a certain list of conditions to be matched

## Overview

| Property | Value |
|----------|-------|
| Type ID | `any_of` |
| Module | libreforge |
| Category | Advanced Logic |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `conditions` | Any/Custom | ✅ | — | — | List of conditions — passes when any one is met. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionAnyOf.kt`).

- **Source Description**: Passes when at least one of the listed conditions is met.
- **Categories**: `meta`

## Configuration Example

```yaml
- id: any_of
  args:
    conditions: # The list of conditions
      - id: is_sprinting
      - id: is_gliding
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
