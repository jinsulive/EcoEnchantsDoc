---
title: regen_multiplier
titleZh: regen_multiplier
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# regen_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies regen speed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `regen_multiplier` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Custom | — | — | — | The multiplier for regeneration speed |
| `reason` | Custom | — | — | — | Optional: The types of regen to multiply, list is here: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/entity/EntityRegainHealthEvent.RegainReason.html |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRegenMultiplier.kt`).

- **Source Description**: Multiplies the amount of health regenerated.
- **Categories**: `player`, `combat`

## Configuration Example

```yaml
- id: regen_multiplier
  args:
    multiplier: 2 # The multiplier for regeneration speed
    reason: # Optional: The types of regen to multiply, list is here: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/entity/EntityRegainHealthEvent.RegainReason.html
      - magic
      - magic_regen
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
