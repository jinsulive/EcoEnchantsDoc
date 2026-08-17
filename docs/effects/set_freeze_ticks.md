---
title: set_freeze_ticks
titleZh: set_freeze_ticks
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# set_freeze_ticks <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets the victim's freeze ticks, controlling how frozen they appear and whether they take freeze damage.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_freeze_ticks` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `ticks` | Expression | ✅ | — | — | The number of freeze ticks to apply to the victim. Supports expressions. Example: `20 * %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetFreezeTicks.kt`).

- **Source Description**: Sets the victim's freeze ticks, controlling how frozen they appear and whether they take freeze damage.
- **Categories**: `player`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: set_freeze_ticks
  args:
    ticks: 20 # The ticks to set (How long the victim has been in snow)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
