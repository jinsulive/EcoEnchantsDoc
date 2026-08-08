---
title: traceback
titleZh: traceback
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# traceback <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Go back to a previous position

## Overview

| Property | Value |
|----------|-------|
| Type ID | `traceback` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `seconds` | Expression(数学表达式) | ✅ | — | — | The seconds to go back (between 1 and 30) \| Source: How many seconds into the past to teleport the player (clamped to 1–30). Supports expressions. Example: `1 + %level% / 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTraceback.kt`).

- **Source Description**: Teleports the player back to where they were a specified number of seconds ago.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: traceback
  args:
    seconds: 10 # The seconds to go back (between 1 and 30)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
