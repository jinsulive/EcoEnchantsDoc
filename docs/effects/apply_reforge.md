---
title: apply_reforge
titleZh: apply_reforge
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# apply_reforge <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Applies a reforge to an item

> **Requires:** Reforges

## Overview

| Property | Value |
|----------|-------|
| Type ID | `apply_reforge` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `reforge` | The reforge ID |

## Configuration Example

```yaml
- id: apply_reforge
  args:
    reforge: strong # The reforge ID
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
