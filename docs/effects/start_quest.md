---
title: start_quest
titleZh: start_quest
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# start_quest <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Starts a quest for the player

> **Requires:** EcoQuests

## Overview

| Property | Value |
|----------|-------|
| Type ID | `start_quest` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `quest` | The quest ID |

## Configuration Example

```yaml
- id: start_quest
  args:
    quest: meet_the_village # The quest ID
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
