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
