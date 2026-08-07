---
title: all_players
titleZh: all_players
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# all_players <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Runs effects for all players on the server

## Overview

| Property | Value |
|----------|-------|
| Type ID | `all_players` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `effects` | The effects to run for each player |

## Configuration Example

```yaml
- id: all_players
  args:
    effects: # The effects to run for each player
      - id: damage_victim
        args:
          damage: 2
          true-damage: true
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
