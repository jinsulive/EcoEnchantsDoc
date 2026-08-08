---
title: keep_level
titleZh: keep_level
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# keep_level <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Makes the player keep their XP level on death

## Overview

| Property | Value |
|----------|-------|
| Type ID | `keep_level` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKeepLevel.kt`).

- **Source Description**: Prevents the player from losing their XP levels on death.
- **Categories**: `economy`, `player`

## Configuration Example

```yaml
- id: keep_level
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
