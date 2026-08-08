---
title: drop_xp
titleZh: drop_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# drop_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Drops experience orbs at the trigger location

## Overview

| Property | Value |
|----------|-------|
| Type ID | `drop_xp` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `xp` | Expression(数学表达式) | ✅ | — | — | The amount of experience to drop. Supports expressions. Example: `10 + %level% * 5` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDropXp.kt`).

- **Source Description**: Drops experience orbs at the trigger location.
- **Categories**: `economy`
- **Requires Trigger Data**: `LOCATION`

## Configuration Example

```yaml
- id: drop_xp
  args:
    xp: 100 # The amount of xp to drop
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
