---
title: stun
titleZh: stun
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# stun <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Prevents the victim entity from moving for a duration.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `stun` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `ticks` | Expression | ✅ | — | — | How many ticks to stun the victim for. Supports expressions. Example: `20 * %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectStun.kt`).

- **Source Description**: Prevents the victim entity from moving for a duration.
- **Categories**: `combat`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: stun
  args:
    ticks: 60 # The duration in ticks to stun the entity
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
