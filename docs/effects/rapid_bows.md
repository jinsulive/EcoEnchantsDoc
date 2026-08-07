---
title: rapid_bows
titleZh: rapid_bows
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# rapid_bows <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Allows bows to be shot at full speed without pulling back as far

## Overview

| Property | Value |
|----------|-------|
| Type ID | `rapid_bows` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `percent_faster` | The percentage less tension to require |

## Configuration Example

```yaml
- id: rapid_bows
  args:
    percent_faster: 15 # The percentage less tension to require
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
