---
title: placeholder_greater_than
titleZh: placeholder_greater_than
category: conditions
subcategory: placeholder
tags:
  - libreforge
outline: deep
---

# placeholder_greater_than <Badge type="info" text="libreforge" />

> Passes when the resolved placeholder value is numerically greater than or equal to the specified value.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `placeholder_greater_than` |
| Module | libreforge |
| Category | Placeholder & Math |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `placeholder` | String | ✅ | — | — | The placeholder string to resolve and evaluate as a number. Example: `%player_level%` |
| `value` | Expression | ✅ | — | — | The minimum numeric threshold the placeholder must meet or exceed. Example: `5 + %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionPlaceholderGreaterThan.kt`).

- **Source Description**: Passes when the resolved placeholder value is numerically greater than or equal to the specified value.
- **Categories**: `meta`

## Configuration Example

```yaml
- id: placeholder_greater_than
  args:
    placeholder: '%ecocrates_ancient_opens%' # The placeholder, including %
    value: 5 # The value it must be >= to
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
