---
title: placeholder_contains
titleZh: placeholder_contains
category: conditions
subcategory: placeholder
tags:
  - libreforge
outline: deep
---

# placeholder_contains <Badge type="info" text="libreforge" />

> Passes when the resolved placeholder value contains the specified string.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `placeholder_contains` |
| Module | libreforge |
| Category | Placeholder & Math |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `placeholder` | String | ✅ | — | — | The placeholder string to resolve and check. Example: `%player_name%` |
| `value` | String | — | — | — | The substring to search for within the resolved placeholder. |
| `ignore_case` | Boolean | — | `false` | — | Whether the substring match should be case-insensitive. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionPlaceholderContains.kt`).

- **Source Description**: Passes when the resolved placeholder value contains the specified string.
- **Categories**: `meta`

## Configuration Example

```yaml
- id: placeholder_contains
  args:
    placeholder: '%ecocrates_ancient_opens%' # The placeholder, including %
    value: "test" # The value the placeholder should contain
    ignore_case: true # If the case should be ignored (optional)
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
