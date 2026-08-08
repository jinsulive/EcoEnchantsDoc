---
title: fill_bucket
titleZh: fill_bucket
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# fill_bucket <Badge type="info" text="libreforge" /> 

> Triggered when filling a bucket

## Overview

| Property | Value |
|----------|-------|
| Type ID | `fill_bucket` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerFillBucket.kt`).

- **Source Description**: Fires when the player fills a bucket.
- **Categories**: `interaction`
- **Requires Trigger Data**: `PLAYER`, `EVENT`

## Configuration Example

```yaml
triggers:
  - fill_bucket
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
