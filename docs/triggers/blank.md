---
title: blank
titleZh: blank
category: triggers
subcategory: utility
tags:
  - libreforge
outline: deep
---

# blank <Badge type="info" text="libreforge" /> 

> 

> 

## Overview

| Property | Value |
|----------|-------|
| Type ID | `blank` |
| Module | libreforge |
| Category | Utility |
| Value | `1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerBlank.kt`).

- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `BLOCK`, `EVENT`, `LOCATION`, `PROJECTILE`, `VELOCITY`, `ITEM`, `TEXT`, `VALUE`, `ALT_VALUE`

## Configuration Example

```yaml
triggers:
  - blank
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
