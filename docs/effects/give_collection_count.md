---
title: give_collection_count
titleZh: give_collection_count
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
deprecated: true
---

# give_collection_count <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Gives a player count toward a collection

> **Requires:** EcoCollections

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_collection_count` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of count to give |
| `collection` | The collection ID |

## Configuration Example

```yaml
- id: give_collection_count
  args:
    amount: 10 # The amount of count to give
    collection: diamond # The collection ID
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
