---
title: has_enchant
titleZh: has_enchant
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# has_enchant <Badge type="info" text="libreforge" />

> Multiple enchants and/or slots are supported:

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_enchant` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `enchant` | The enchant ID |
| `slot` | The slot |

## Configuration Example

```yaml
- id: has_enchant
  args:
    enchant: sharpness # The enchant ID 
    slot: mainhand # The slot
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
