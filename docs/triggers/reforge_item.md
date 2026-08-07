---
title: reforge_item
titleZh: reforge_item
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - reforges
outline: deep
---

# reforge_item <Badge type="info" text="libreforge" /> <Badge type="warning" text="Reforges" />

> Triggered when reforging an item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `reforge_item` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The reforge cost |
| Requires | Reforges |

## Configuration Example

```yaml
triggers:
  - reforge_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The reforge cost |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
