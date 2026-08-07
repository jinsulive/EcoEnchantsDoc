---
title: at_least_of
titleZh: at_least_of
category: conditions
subcategory: logic
tags:
  - libreforge
outline: deep
---

# at_least_of <Badge type="info" text="libreforge" />

> Requires at least a certain mount of a certain list of conditions to be met

## Overview

| Property | Value |
|----------|-------|
| Type ID | `at_least_of` |
| Module | libreforge |
| Category | Advanced Logic |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `conditions` | The list of conditions |
| `amount` | The amount of conditions |

## Configuration Example

```yaml
- id: at_least_of
  args:
    conditions: # The list of conditions
      - id: is_sprinting
      - id: is_gliding
    amount: 1 # The amount of conditions
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
