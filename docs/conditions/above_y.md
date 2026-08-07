---
title: above_y
titleZh: above_y
category: conditions
subcategory: position
tags:
  - libreforge
outline: deep
---

# above_y <Badge type="info" text="libreforge" />

> Requires a player to be above a certain y level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `above_y` |
| Module | libreforge |
| Category | Position & Movement |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Configuration Example

```yaml
- id: above_y
  args:
    y: 64
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
