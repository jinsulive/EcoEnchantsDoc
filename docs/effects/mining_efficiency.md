---
title: mining_efficiency
titleZh: mining_efficiency
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mining_efficiency <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Adds mining efficiency (mining speed when using the correct tool)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mining_efficiency` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The extra mining efficiency |

## Configuration Example

```yaml
- id: mining_efficiency
  args:
    amount: 5 # The extra mining efficiency
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
