---
title: give_magic
titleZh: give_magic
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
deprecated: true
---

# give_magic <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Add / subtract magic

> **Requires:** EcoSkills

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_magic` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | The point to add/subtract |
| `amount` | The amount to add/subtract |

## Configuration Example

```yaml
- id: give_magic
  args:
    type: mana # The point to add/subtract
    amount: 15 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
