---
title: ring_bell
titleZh: ring_bell
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# ring_bell <Badge type="info" text="libreforge" /> 

> Fires when the player rings a bell.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `ring_bell` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerRingBell.kt`).

- **Source Description**: Fires when the player rings a bell.
- **Categories**: `interaction`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - ring_bell
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
