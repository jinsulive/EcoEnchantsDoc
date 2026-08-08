---
title: placeholder_equals
titleZh: placeholder_equals
category: conditions
subcategory: placeholder
tags:
  - libreforge
outline: deep
---

# placeholder_equals <Badge type="info" text="libreforge" />

> Requires a placeholder to equal a certain value

## Overview

| Property | Value |
|----------|-------|
| Type ID | `placeholder_equals` |
| Module | libreforge |
| Category | Placeholder & Math |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `placeholder` | String | ✅ | — | — | The placeholder string to resolve and compare. Example: `%player_gamemode%` |
| `value` | String | ✅ | — | — | The exact string the resolved placeholder must equal. |
| `ignore_case` | Boolean | — | `false` | — | Whether the equality check should be case-insensitive. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionPlaceholderEquals.kt`).

- **Source Description**: Passes when the resolved placeholder value equals the specified string.
- **Categories**: `meta`

## Configuration Example

```yaml
- id: placeholder_equals
  args:
    placeholder: '%ecocrates_ancient_opens%' # The placeholder, including %
    value: 5 # The value it must equal
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
