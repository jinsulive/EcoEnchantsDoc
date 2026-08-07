---
title: in_slot
titleZh: in_slot
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# in_slot <Badge type="info" text="libreforge" />

> Requires the item (e.g. the EcoItem, enchanted item, reforged item) to be in a certain slot.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_slot` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `slot` | The slot |

## Configuration Example

```yaml
- id: in_slot
  args:
    slot: mainhand # The slot
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
