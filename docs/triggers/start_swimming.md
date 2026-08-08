---
title: start_swimming
titleZh: start_swimming
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# start_swimming <Badge type="info" text="libreforge" /> 

> Fires when a player starts swimming.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `start_swimming` |
| Module | libreforge |
| Category | Internal |
| Value | `1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerStartSwimming.kt`).

- **Source Description**: Fires when a player starts swimming.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - start_swimming
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | `1` |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
