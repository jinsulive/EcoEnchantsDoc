---
title: set_unbreakable
titleZh: set_unbreakable
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# set_unbreakable <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Sets the unbreakable tag on an item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_unbreakable` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `value` | True = apply unbreakable, False = remove unbreakable |
| `slot` | The slot to apply unbreakable (defaults to "holder") |
| `persist_on_disable` | If the unbreakable tag should persist when unequipped or effect deactivated |

## Configuration Example

```yaml
- id: set_unbreakable
  args:
    value: true # True = apply unbreakable, False = remove unbreakable
    slot: holder # The slot to apply unbreakable (defaults to "holder")
    persist_on_disable: true # If the unbreakable tag should persist when unequipped or effect deactivated
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
