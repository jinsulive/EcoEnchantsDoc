---
title: rotate_victim
titleZh: rotate_victim
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# rotate_victim <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Spin the victim around

## Overview

| Property | Value |
|----------|-------|
| Type ID | `rotate_victim` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `angle` | Expression(数学表达式) | ✅ | — | — | The number of degrees to add to the victim's current yaw. Supports expressions. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRotateVictim.kt`).

- **Source Description**: Rotates the victim's yaw by a specified angle.
- **Categories**: `movement`, `combat`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: rotate_victim
  args:
    angle: 180 # The angle to rotate / spin (in degrees)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
