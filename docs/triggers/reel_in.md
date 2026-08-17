---
title: reel_in
titleZh: reel_in
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# reel_in <Badge type="info" text="libreforge" /> 

> Fires when the player reels in their fishing rod without a catch.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `reel_in` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerReelIn.kt`).

- **Source Description**: Fires when the player reels in their fishing rod without a catch.
- **Categories**: `fishing`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`

## Configuration Example

```yaml
triggers:
  - reel_in
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
