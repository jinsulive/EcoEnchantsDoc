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

| Parameter | Description |
|-----------|-------------|
| `conditions` | The list of conditions |

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
