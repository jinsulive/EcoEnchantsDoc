---
title: dont_consume_lapis_chance
titleZh: dont_consume_lapis_chance
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# dont_consume_lapis_chance <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Prevents consuming lapis when enchanting items

## Overview

| Property | Value |
|----------|-------|
| Type ID | `dont_consume_lapis_chance` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `chance` | The chance to not consume lapis |

## Configuration Example

```yaml
- id: dont_consume_lapis_chance
  args:
    chance: 20 # The chance to not consume lapis
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
