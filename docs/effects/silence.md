---
title: silence
titleZh: silence
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# silence <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Silences an entity so it cannot make sounds for a duration

## Overview

| Property | Value |
|----------|-------|
| Type ID | `silence` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `ticks` | Expression(数学表达式) | ✅ | — | — | How long to silence the entity, in ticks. Supports expressions. Example: `20 * %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSilence.kt`).

- **Source Description**: Silences the victim entity for a duration, preventing it from making sounds.
- **Categories**: `entity`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: silence
  args:
    ticks: 100 # The duration in ticks to silence the entity
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
