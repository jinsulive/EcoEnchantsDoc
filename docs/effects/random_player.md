---
title: random_player
titleZh: random_player
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# random_player <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Runs effects for a random player on the server

## Overview

| Property | Value |
|----------|-------|
| Type ID | `random_player` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `effects` | The effects to run for the player |

## Configuration Example

```yaml
- id: random_player
  args:
    effects: # The effects to run for the player
      - id: kick
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
