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

> Allows the player to fire bows faster by a given percentage, as a permanent passive effect.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `rapid_bows` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `percent_faster` | Expression | ✅ | — | — | How many percent faster the bow charges. Supports expressions. Example: `10 + %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRapidBows.kt`).

- **Source Description**: Allows the player to fire bows faster by a given percentage, as a permanent passive effect.
- **Categories**: `combat`

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
