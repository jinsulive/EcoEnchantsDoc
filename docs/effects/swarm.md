---
title: swarm
titleZh: swarm
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# swarm <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Makes nearby monsters in a certain radius attack the victim

## Overview

| Property | Value |
|----------|-------|
| Type ID | `swarm` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `radius` | The radius to swarm from |
| `entities` | (Optional) The list of entities to anger |

## Configuration Example

```yaml
- id: swarm
  args:
    radius: 20 # The radius to swarm from
    entities: # (Optional) The list of entities to anger
      - zombie 
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
