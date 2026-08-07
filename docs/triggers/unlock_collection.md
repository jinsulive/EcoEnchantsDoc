---
title: unlock_collection
titleZh: unlock_collection
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecocollections
outline: deep
---

# unlock_collection <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoCollections" />

> Triggered when unlocking a collection

## Overview

| Property | Value |
|----------|-------|
| Type ID | `unlock_collection` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | 1 |
| Requires | EcoCollections |

## Configuration Example

```yaml
triggers:
  - unlock_collection
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
