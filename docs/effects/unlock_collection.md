---
title: unlock_collection
titleZh: unlock_collection
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
deprecated: true
---

# unlock_collection <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Unlocks a collection for the player

> **Requires:** EcoCollections

## Overview

| Property | Value |
|----------|-------|
| Type ID | `unlock_collection` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `collection` | The collection ID |

## Configuration Example

```yaml
- id: unlock_collection
  args:
    collection: diamond # The collection ID
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
