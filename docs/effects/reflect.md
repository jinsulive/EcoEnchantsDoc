---
title: reflect
titleZh: reflect
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# reflect <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Reflects a portion of incoming damage back at the attacker.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `reflect` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The fraction of incoming damage to reflect back at the attacker. Supports expressions. Example: `0.2 + %level% * 0.02` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectReflect.kt`).

- **Source Description**: Reflects a portion of incoming damage back at the attacker.
- **Categories**: `combat`
- **Requires Trigger Data**: `EVENT`

## Configuration Example

```yaml
- id: reflect
  args:
    multiplier: 0.5 # The fraction of incoming damage to reflect
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
