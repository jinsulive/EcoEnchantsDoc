---
title: elytra_boost_save_chance
titleZh: elytra_boost_save_chance
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# elytra_boost_save_chance <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />
> **Requires:** Paper

> Gives a percentage chance that a firework used for an elytra boost will not be consumed.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `elytra_boost_save_chance` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `chance` | Expression | ✅ | — | — | The percentage chance (0–100) for this effect to activate. Supports expressions. |

## Configuration Example

```yaml
- id: elytra_boost_save_chance
  args:
    chance: 20 # The chance to not consume a firework
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
