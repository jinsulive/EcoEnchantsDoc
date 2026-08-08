---
title: homing
titleZh: homing
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# homing <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Makes projectiles hone in onto entities (homing arrows / tridents)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `homing` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `distance` | Expression(数学表达式) | ✅ | — | — | The maximum range at which the arrow will lock on to a target. Supports expressions. Example: `10 + %level%` |
| `targets` | Entity List | — | `[]` | — | A list of entity types the arrow will home in on. Leave empty to target all entities. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectHoming.kt`).

- **Source Description**: Makes fired arrows home in on the nearest valid target within range.
- **Categories**: `combat`
- **Requires Trigger Data**: `PROJECTILE`

## Configuration Example

```yaml
- id: homing
  args:
      distance: 10 # The distance to hone in from
      targets: # (Optional) The whitelist of entities to target
        - zombie
        - skeleton
    ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
