---
title: placeholder_less_than
titleZh: placeholder_less_than
category: conditions
subcategory: placeholder
tags:
  - libreforge
outline: deep
---

# placeholder_less_than <Badge type="info" text="libreforge" />

> Requires a placeholder to be less than a certain value

## Overview

| Property | Value |
|----------|-------|
| Type ID | `placeholder_less_than` |
| Module | libreforge |
| Category | Placeholder & Math |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `placeholder` | String | ✅ | — | — | The placeholder string to resolve and evaluate as a number. Example: `%player_level%` |
| `value` | Expression(数学表达式) | ✅ | — | — | The numeric threshold the placeholder must be strictly below. Example: `5 + %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionPlaceholderLessThan.kt`).

- **Source Description**: Passes when the resolved placeholder value is numerically less than the specified value.
- **Categories**: `meta`

## Configuration Example

```yaml
- id: placeholder_less_than
  args:
    placeholder: '%ecocrates_ancient_opens%' # The placeholder, including %
    value: 5 # The value it must be less than
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
