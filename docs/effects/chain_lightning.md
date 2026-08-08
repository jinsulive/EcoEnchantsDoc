---
title: chain_lightning
titleZh: chain_lightning
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# chain_lightning <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Strikes chain lightning that jumps between nearby entities

## Overview

| Property | Value |
|----------|-------|
| Type ID | `chain_lightning` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `jumps` | Expression(数学表达式) | ✅ | — | — | The number of times the lightning jumps \| Source: The number of entities the lightning can chain to. Supports expressions. Example: `3 + %level%` |
| `range` | Expression(数学表达式) | ✅ | — | — | The range in blocks to look for the next target \| Source: The maximum distance between chain targets. Supports expressions. Example: `5 + %level% * 0.5` |
| `damage` | Expression(数学表达式) | ✅ | — | — | The damage dealt to each entity hit \| Source: The damage dealt to each entity struck. Supports expressions. Example: `%level% * 1.5` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectChainLightning.kt`).

- **Source Description**: Strikes lightning that chains to nearby entities, dealing damage at each jump.
- **Categories**: `combat`, `visual`
- **Requires Trigger Data**: `VICTIM`, `LOCATION`

## Configuration Example

```yaml
- id: chain_lightning
  args:
    jumps: 3 # The number of times the lightning jumps
    range: 6 # The range in blocks to look for the next target
    damage: 3.0 # The damage dealt to each entity hit
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
