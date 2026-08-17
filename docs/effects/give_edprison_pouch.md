---
title: give_edprison_pouch
titleZh: give_edprison_pouch
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# give_edprison_pouch <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives the player an EdPrison pouch item, optionally pre-unlocked.

> **Requires:** EdPrison

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_edprison_pouch` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The EdPrison pouch ID to give. |
| `unlocked` | Boolean | ✅ | — | — | Whether the pouch starts fully unlocked. |

## Configuration Example

```yaml
- id: give_edprison_pouch
  args:
    type: blocks # the ID of the pouch type
    unlocked: true # Whether the pouch is unlocked
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
