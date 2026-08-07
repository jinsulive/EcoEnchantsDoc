---
title: inscribe_item
titleZh: inscribe_item
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# inscribe_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Inscribes an item with a scroll

> **Requires:** EcoScrolls

## Overview

| Property | Value |
|----------|-------|
| Type ID | `inscribe_item` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `scroll` | The scroll ID |

## Configuration Example

```yaml
- id: inscribe_item
  args:
    scroll: hot_potato_book # The scroll ID
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
