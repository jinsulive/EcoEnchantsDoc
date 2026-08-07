---
title: remove_enchant
titleZh: remove_enchant
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# remove_enchant <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Removes an enchant from the item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `remove_enchant` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `enchant` | The ID of the enchant |

## Configuration Example

```yaml
- id: remove_enchant
  args:
    enchant: telekinesis # The ID of the enchant
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
