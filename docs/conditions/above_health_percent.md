---
title: above_health_percent
titleZh: above_health_percent
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# above_health_percent <Badge type="info" text="libreforge" />

> Passes when the entity's health is at or above the given percentage of its maximum.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `above_health_percent` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `percent` | Expression | ✅ | — | — | The minimum health percentage (0–100). Example: `50 + %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionAboveHealthPercent.kt`).

- **Source Description**: Passes when the entity's health is at or above the given percentage of its maximum.
- **Categories**: `combat`

## Configuration Example

```yaml
- id: above_health_percent
  args:
    percent: 50 # The minimum percent
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
