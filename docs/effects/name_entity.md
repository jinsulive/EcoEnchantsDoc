---
title: name_entity
titleZh: name_entity
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# name_entity <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Set the display name of an entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `name_entity` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `name` | The name to set |

## Configuration Example

```yaml
- id: name_entity
  args:
    name: "&cTagged!" # The name to set
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
