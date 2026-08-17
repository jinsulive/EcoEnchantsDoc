---
title: edprison_economy_multiplier
titleZh: edprison_economy_multiplier
category: effects
subcategory: edprison
tags:
  - libreforge
outline: deep
---

# edprison_economy_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiplies EdPrison economy earnings for one or all economy types while the holder is active.

> **Requires:** EdPrison

## Overview

| Property | Value |
|----------|-------|
| Type ID | `edprison_economy_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The economy earnings multiplier. Supports expressions. |
| `economies` | String_list | — | — | — | List of EdPrison economy types to apply the multiplier to. If omitted, applies to all economies. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/edprisoncore/impl/EffectEdPrisonEconomyMultiplier.kt`).

- **Source Description**: Multiplies EdPrison economy earnings for one or all economy types while the holder is active.

- **Categories**: `economy`

## Configuration Example

```yaml
- id: edprison_economy_multiplier
  args:
    multiplier: <value>
    economies: <value>
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
