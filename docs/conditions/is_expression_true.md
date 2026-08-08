---
title: is_expression_true
titleZh: is_expression_true
category: conditions
subcategory: placeholder
tags:
  - libreforge
outline: deep
---

# is_expression_true <Badge type="info" text="libreforge" />

> Requires a certain expression to be true

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_expression_true` |
| Module | libreforge |
| Category | Placeholder & Math |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `expression` | Expression(数学表达式) | ✅ | — | — | A mathematical expression or placeholder that must evaluate to 1 for the condition to pass. Example: `%player_level% >= 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsExpressionTrue.kt`).

- **Source Description**: Passes when the given mathematical expression evaluates to 1.
- **Categories**: `meta`

## Configuration Example

```yaml
- id: is_expression_true
  args:
    expression: "%level% > 3"
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
