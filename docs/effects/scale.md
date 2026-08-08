---
title: scale
titleZh: scale
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# scale <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies scale

## Overview

| Property | Value |
|----------|-------|
| Type ID | `scale` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for scale \| Source: The scale multiplier to apply to the entity's size. Supports expressions. Example: `1 + %level% * 0.05` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectScale.kt`).

- **Source Description**: Scales the entity's size by a given multiplier.
- **Categories**: `entity`, `attribute`

## Configuration Example

```yaml
- id: scale
  args:
    multiplier: 1.5 # The multiplier for scale
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
