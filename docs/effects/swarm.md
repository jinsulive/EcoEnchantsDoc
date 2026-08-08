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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `radius` | Expression(数学表达式) | ✅ | — | — | The radius to search for monsters that will target the victim. Supports expressions. Example: `10 + %level%` |
| `entities` | Custom | — | — | — | (Optional) The list of entities to anger |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSwarm.kt`).

- **Source Description**: Causes all nearby monsters within a radius to target the victim.
- **Categories**: `combat`, `entity`
- **Requires Trigger Data**: `VICTIM`

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
