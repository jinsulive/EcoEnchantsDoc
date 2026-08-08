---
title: strip_ai
titleZh: strip_ai
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# strip_ai <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Strips a mob's AI temporarily

## Overview

| Property | Value |
|----------|-------|
| Type ID | `strip_ai` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `duration` | Expression(数学表达式) | ✅ | — | — | The amount of ticks to strip AI for \| Source: How long to disable the entity's AI, in ticks. Supports expressions. Example: `20 * %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectStripAI.kt`).

- **Source Description**: Temporarily removes the AI from the victim entity, stopping it from acting.
- **Categories**: `entity`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: strip_ai
  args:
    duration: 60 # The amount of ticks to strip AI for
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
