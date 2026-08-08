---
title: empty_bucket
titleZh: empty_bucket
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# empty_bucket <Badge type="info" text="libreforge" /> 

> Triggered when emptying a bucket

## Overview

| Property | Value |
|----------|-------|
| Type ID | `empty_bucket` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEmptyBucket.kt`).

- **Source Description**: Fires when the player empties a bucket.
- **Categories**: `interaction`
- **Requires Trigger Data**: `PLAYER`, `EVENT`

## Configuration Example

```yaml
triggers:
  - empty_bucket
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
