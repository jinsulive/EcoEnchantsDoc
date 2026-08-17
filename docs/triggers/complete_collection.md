---
title: complete_collection
titleZh: complete_collection
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecocollections
outline: deep
deprecated: true
---

# complete_collection <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoCollections" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Triggered when completing a collection

## Overview

| Property | Value |
|----------|-------|
| Type ID | `complete_collection` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | 1 |
| Requires | EcoCollections |

## Configuration Example

```yaml
triggers:
  - complete_collection
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
