---
title: damage_twice
titleZh: damage_twice
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_twice <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Deals an extra hit to the victim

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_twice` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDamageTwice.kt`).

- **Source Description**: Causes the victim to take the triggering hit's damage a second time.
- **Categories**: `combat`
- **Requires Trigger Data**: `VICTIM`, `EVENT`

## Configuration Example

```yaml
- id: damage_twice
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
