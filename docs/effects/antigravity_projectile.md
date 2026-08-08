---
title: antigravity_projectile
titleZh: antigravity_projectile
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# antigravity_projectile <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Projectiles are immune from gravity, allowing them to fly in a straight line until they hit something.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `antigravity_projectile` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAntigravityProjectile.kt`).

- **Source Description**: Makes all projectiles the player fires travel in a straight line, unaffected by gravity.
- **Categories**: `combat`

## Configuration Example

```yaml
- id: antigravity_projectile
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
