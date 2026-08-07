---
title: tier_up_collection
titleZh: tier_up_collection
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecocollections
outline: deep
---

# tier_up_collection <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoCollections" />

> Triggered when tiering up a collection

## Overview

| Property | Value |
|----------|-------|
| Type ID | `tier_up_collection` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The new tier |
| Requires | EcoCollections |

## Configuration Example

```yaml
triggers:
  - tier_up_collection
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The new tier |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
