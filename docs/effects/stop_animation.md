---
title: stop_animation
titleZh: stop_animation
category: effects
subcategory: bettermodel
tags:
  - libreforge
outline: deep
---

# stop_animation <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Stops a BetterModel animation on the triggering entity or victim.

> **Requires:** BetterModel

## Overview

| Property | Value |
|----------|-------|
| Type ID | `stop_animation` |
| Module | libreforge |
| Category | Visual, Entity |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `animation` | String | ✅ | — | — | The name of the animation to stop. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/bettermodel/impl/EffectStopAnimation.kt`).

- **Source Description**: Stops a BetterModel animation on the triggering entity or victim.

- **Categories**: `visual, entity`

## Configuration Example

```yaml
- id: stop_animation
  args:
    animation: <value>
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
